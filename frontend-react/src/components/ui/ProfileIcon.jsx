import React from "react";

export default function ProfileIcon({
  fName = "",
  lName = "",
  size = 40,
  className = "",
  bg = "bg-gray-200",
  textColor = "text-gray-700",
  src, 
}) {
  const initials = `${fName?.[0] || ""}${lName?.[0] || ""}`.toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-full border-2 border-[#4F46E5] overflow-hidden ${bg} ${textColor} ${className}`}
      style={{ width: size, height: size }}
      aria-label={`${fName} ${lName}`}
    >
      {src ? (
        <img
          src={src}
          alt={`${fName} ${lName}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium">{initials || "?"}</span>
      )}
    </div>
  );
}