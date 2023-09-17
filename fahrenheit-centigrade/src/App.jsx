import { useState } from 'react'

import './App.css'
/*
The centigrade to Fahrenheit conversion formula is:
 fToCel = ((fTemp - 32) * 5) / 9;
 cToFahr = (cTemp * 9) / 5 + 32;
*/ 
function App() {
  
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsiusResult, setCelsiusResult] = useState('');
  const [fahrenheitResult, setFahrenheitResult] = useState('');

  const convertToCelsius = () => {
    const fTemp = parseFloat(fahrenheit);
    if (!isNaN(fTemp)) {
      const fToCel = ((fTemp - 32) * 5) / 9;
      setCelsiusResult(`${fTemp}\xB0F is ${fToCel}\xB0C`);
    } else {
      setCelsiusResult('Please enter a valid Fahrenheit temperature.');
    }
  };

  const convertToFahrenheit = () => {
    const cTemp = parseFloat(celsius);
    if (!isNaN(cTemp)) {
      const cToFahr = (cTemp * 9) / 5 + 32;
      setFahrenheitResult(`${cTemp}\xB0C is ${cToFahr}\xB0F`);
    } else {
      setFahrenheitResult('Please enter a valid Celsius temperature.');
    }
  };

  return (
<div>
      <h2>Problem-19:Write a program to convert temperatures to and from celsius, fahrenheit.</h2>
      <label>
        Enter Celsius Temperature:
        <input
          type="text"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        /> <br />
        <br />
        <button onClick={convertToFahrenheit}>Convert</button>
        <p>{fahrenheitResult}</p>
      </label>
      <br />
      <label>
        Enter Fahrenheit Temperature:
        <input
          type="text"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        /> <br /> <br />
        <button onClick={convertToCelsius}>Convert</button>
        <p>{celsiusResult}</p>
      </label>
    </div>
  )
}

export default App
