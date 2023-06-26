import "./styles.css";
import React from "react";

export default function Cel({ value, onChange }) {
  return (
    <div className="temp">
      <label>
        <h1> Celsius Scale </h1>
        <input type="number" onChange={onChange} value={value} />
      </label>
    </div>
  );
}
