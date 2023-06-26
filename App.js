import Cel from "./celsius";
import Ferh from "./fehrenite";
import { useState } from "react";

export default function App() {
  let [fehrenheit, setFehrenheit] = useState("");
  let [celsius, setCelsius] = useState("");
  const handleFehrenheit = (e) => {
    if (e.target.value === "") {
      setCelsius("");
      setFehrenheit("");
    } else {
      let ferValue = e.target.value;
      setFehrenheit(ferValue);
      let ccel = ((ferValue - 32) * 5) / 9;
      setCelsius(ccel);
    }
  };

  const handleCelsius = (e) => {
    if (e.target.value === "") {
      setCelsius("");
      setFehrenheit("");
    } else {
      let celsiusValue = e.target.value;
      setCelsius(celsiusValue);
      let cfer = (celsiusValue * 9) / 5 + 32;
      setFehrenheit(cfer);
    }
  };

  return (
    <>
      <Cel value={celsius} onChange={handleCelsius} />
      <Ferh value={fehrenheit} onChange={handleFehrenheit} />
    </>
  );
}
