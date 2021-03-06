import React, { useState } from "react";
import Quote from "./Quote";

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `
      rgba(${r},${g},${b})
      `;
}

const App = () => {
  const [color, setColor] = useState(getRandomColor());

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: color, height: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Quote color={color} changeColor={changeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
