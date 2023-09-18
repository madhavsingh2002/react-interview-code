import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkNumber = () => {
    const x = parseInt(number);

    if (isNaN(x)) {
      setResult('Please enter a valid number.');
    } else {
      const isWithin20of100 = Math.abs(100 - x) <= 20;
      const isWithin20of400 = Math.abs(400 - x) <= 20;

      if (isWithin20of100 || isWithin20of400) {
        setResult('The number is within 20 of 100 or 400.');
      } else {
        setResult('The number is not within 20 of 100 or 400.');
      }
    }
  };
  return (
    <div>
    <h3>Problem-23: Write program to check whether a given integer is within 20 of 100 or 400.</h3>
    <label>Enter a number: </label>
    <br />
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />
    <br /><br />
    <button onClick={checkNumber}>Check</button>
    <p>{result}</p>
  </div>
  )
}

export default App
