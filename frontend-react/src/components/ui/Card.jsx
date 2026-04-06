import React from "react";

const Card = ({ header, text, date, className = "" }) => {
  return (
    <div
      className={`h-auto w-full rounded-xl border border-gray-200 bg-white p-4 ${className}`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-[15px] font-semibold text-gray-800">{header}</h3>
          <button className="text-gray-500 hover:text-gray-700">
            ⋮
          </button>
        </div>

        <p className="mt-2 text-[13px] leading-6 text-gray-600">
          {text}
        </p>

        <div className="mt-auto">
          <div className="my-4 h-px bg-gray-100" />
          <p className="text-[13px] text-gray-500">
            <span>Created On:</span> <span className="text-gray-700">{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;