import React from "react";

const Button = ({ type = 'button',  children, ...props }) => {
  return (
    <div className="w-full max-w-[500px]">
      <button type={type}  {...props} className="bg-white text-black px-8 py-2 rounded-md font-medium text-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
