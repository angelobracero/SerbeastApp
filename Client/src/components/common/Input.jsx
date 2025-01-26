import React from "react";

const Input = ({ error, ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white w-full"
        autoComplete="off"
        required
      />
      <span className="absolute bottom-[-20px] left-0 italic text-xs text-[#FF3B3B]">
        {error}
      </span>
    </div>
  );
};

export default Input;
