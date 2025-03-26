import React from "react";

interface ButtonProps {
  btnFunction: () => void;
  btnText: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ btnFunction, btnText, className }) => {
  return (
    <button
      className={`py-3 px-5 rounded-lg cursor-pointer ${className}`}
      type="button"
      onClick={btnFunction}
    >
      {btnText}
    </button>
  );
};

export default Button;
