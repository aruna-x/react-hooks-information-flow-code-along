import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {
  return <div className="child" style={{ backgroundColor: childColor }} onClick={() => {const newColor = getRandomColor(); onChangeColor(newColor);}}/>;
}

export default Child;
