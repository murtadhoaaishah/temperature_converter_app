import { useState } from "react";
import "./App.css";

function App() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;

    return celsius;
  }
  function celsiusToFahrenheit(value) {
    const fahrenheit = (value * 9) / 5 + 32;
    return fahrenheit;
  }

  const handleFahrenheit = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(fahrenheitToCelsius(fahrenheitValue));
  };

  const handleCelsius = (e) => {
    const celciusValue = e.target.value;
    setCelsius(celciusValue);
    setFahrenheit(celsiusToFahrenheit(celciusValue));
  };
  return (
    <div className="App">
      <h1>Temperature converter</h1>
      <span>
        <sup>o</sup>F
      </span>
      <input type="number" value={fahrenheit} onChange={handleFahrenheit} />
      <span>
        <sup>o</sup>C
      </span>
      <input type="number" value={celsius} onChange={handleCelsius} />
    </div>
  );
}

export default App;
