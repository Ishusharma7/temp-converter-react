import "./styles.css";
import React from "react";

export default function Ferh({ value, onChange }) {
  return (
    <div className="temp">
      <label>
        <h1> Fehrenheit Scale</h1>
        <input type="number" onChange={onChange} value={value} />
      </label>
    </div>
  );
}
