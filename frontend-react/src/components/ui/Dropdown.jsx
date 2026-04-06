import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const DropdownContext = createContext(null);

function useDropdown() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("Dropdown subcomponents must be used inside <Dropdown>.");
  }

  return context;
}

const defaultStyles = {
  root: "relative inline-block",
  button:
    "inline-flex items-center gap-2 rounded-lg bg-[#4c43e8] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition",
  contents:
    "absolute left-0 z-50 mt-2 min-w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg",
  list: "py-1",
  item: "block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition",
  separator: "my-1 h-px bg-gray-200",
};

function mergeStyles(base, override = {}) {
  return { ...base, ...override };
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown({ children, styles = {}, className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const mergedStyles = useMemo(
    () => mergeStyles(defaultStyles, styles),
    [styles],
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen, styles: mergedStyles }}>
      <div ref={ref} className={cx(mergedStyles.root, className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Button = function DropdownButton({
  children,
  className = "",
  ...props
}) {
  const { open, setOpen, styles } = useDropdown();

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((prev) => !prev)}
      className={cx(styles.button, className)}
      {...props}
    >
      {children}
      <svg
        className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6 8l4 4 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

Dropdown.Contents = function DropdownContents({
  children,
  className = "",
  align = "left",
  ...props
}) {
  const { open, styles } = useDropdown();

  if (!open) return null;

  return (
    <div
      role="menu"
      className={cx(
        styles.contents,
        align === "right" ? "right-0 left-auto" : "left-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Dropdown.List = function DropdownList({ children, className = "", ...props }) {
  const { styles } = useDropdown();

  return (
    <div className={cx(styles.list, className)} {...props}>
      {children}
    </div>
  );
};

Dropdown.Item = function DropdownItem({
  children,
  to,
  onClick,
  className = "",
  ...props
}) {
  const { setOpen, styles } = useDropdown();

  const handleClick = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
    setOpen(false);
  };

  const itemClassName = cx(styles.item, className);

  if (to) {
    return (
      <a href={to} onClick={handleClick} className={itemClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={itemClassName}
      {...props}
    >
      {children}
    </button>
  );
};

Dropdown.Separator = function DropdownSeparator({ className = "", ...props }) {
  const { styles } = useDropdown();

  return <div className={cx(styles.separator, className)} {...props} />;
};

export default Dropdown;
export { Dropdown };
