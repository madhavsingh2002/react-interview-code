import { useState } from 'react'

import './App.css'

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const checkNumbers = () => {
    const x = parseInt(number1);
    const y = parseInt(number2);

    if (!isNaN(x) && !isNaN(y)) {
      if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        setResult('One number is positive, and the other is negative.');
      } else {
        setResult('Both numbers are either positive or negative.');
      }
    } else {
      setResult('Please enter valid numbers.');
    }
  };


  return (
    <div>
    <h3>Problem-24: program to check from two given integers, whether one is positive and another one is negative.</h3>
    <label>Enter the first number: </label>
    <br /><br />
    <input
      type="number"
      value={number1}
      onChange={(e) => setNumber1(e.target.value)}
    />
    <br /><br />
    <label>Enter the second number: </label>
    <br /><br />
    <input
      type="number"
      value={number2}
      onChange={(e) => setNumber2(e.target.value)}
    />
    <br /><br />
    <button onClick={checkNumbers}>Check</button>
    <p>{result}</p>
  </div>
);
}


export default App
