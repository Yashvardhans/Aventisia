import React, { createContext, useContext } from "react";

const SearchContext = createContext();

function useSearch() {
  return useContext(SearchContext);
}
export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  children,
}) {
  return (
    <SearchContext.Provider value={{}}>
      <div className={`relative max-w-sm ${className}`}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="py-2 px-3 text-sm outline-none"
        />

        {/* Fully free composition */}
        {children}
      </div>
    </SearchContext.Provider>
  );
}


SearchInput.Slot = function Slot({ children, className = "" }) {
  return <div className={className}>{children}</div>;
};

export default SearchInput;

