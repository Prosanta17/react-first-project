import React from "react";

const Button = ({ btnFunction, btnText }) => {
  return <button onClick={btnFunction}>{btnText}</button>;
};

export default Button;
