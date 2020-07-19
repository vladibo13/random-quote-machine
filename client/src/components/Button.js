import React from "react";

const Button = ({ color, changeColor }) => {
  return (
    <button
      className="btn  btn-lg text-white shadow-none"
      style={{ backgroundColor: color, outline: "none" }}
      onClick={() => changeColor()}
    >
      Generate Quote
    </button>
  );
};

export default Button;
