import { useNavigate } from "react-router-dom";
export default function SideNavContent({
  header,
  items = [],
  className = "",
  intemsClassName = "",
}) {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col gap-2 px-3 pt-6 ${className}`}>
      {header && (
        <div className=" pl-2 text-xs font-semibold text-0.625 text-gray-400 uppercase">
          {header}
        </div>
      )}

      <div className={`flex flex-col gap-1 px-4 ${intemsClassName}`}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="relative flex items-center text-[15px] gap-3 px-3 py-3 font-medium rounded-lg text-gray-500 hover:bg-[#E0E7FF] hover:text-[#4F46E5] transition
before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
before:h-6 before:w-0.75 before:rounded-full
before:bg-[#1E1B4B] before:opacity-0 hover:before:opacity-100"
          >
            {item.icon && (
              <span className="flex items-center justify-center">
                {item.icon}
              </span>
            )}

            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
