import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

  const clear = () => {
    setCelsius("");
    setFahrenheit("");
  };
  return (
    <div className="App">
      <h1>Temperature converter</h1>
      <section>
        <span>
          <sup>o</sup>F (fahrenheit)
        </span>
        <input type="number" value={fahrenheit} onChange={handleFahrenheit} />
      </section>
      <section>
        <span>
          <sup>o</sup>C (Celcius)
        </span>
        <input type="number" value={celsius} onChange={handleCelsius} />
      </section>
      <button onClick={clear}>Reset</button>
    </div>
  );
}

export default App;
