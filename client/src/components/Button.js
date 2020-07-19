import React from "react";

const Button = ({ color, changeColor }) => {
  return (
    <button
      className="btn  btn-lg text-white"
      style={{ backgroundColor: color, outline: "none" }}
      onClick={() => changeColor()}
    >
      Click
    </button>
  );
};

export default Button;
