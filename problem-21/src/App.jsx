import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateDifference = () => {
    const n = parseInt(inputNumber);

    if (isNaN(n)) {
      setResult('Please enter a valid number.');
    } else {
      if (n <= 19) {
        setResult(`Absolute Difference: ${19 - n}`);
      } else {
        setResult(`Triple Absolute Difference: ${(n - 19) * 3}`);
      }
    }
  };

  return (
    <div>
      <h3>Problem-21: Write a  program to compute the absolute difference between a specified number and 19. <br />
         Returns triple the absolute difference if the specified number is greater than 19.</h3>
         <label >Enter your Number:  </label><br /><br />
         <input type="number" value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)} /><br /><br />
         <button onClick={calculateDifference}>Check</button>
         <p> {result} </p>
    </div>
  )
}

export default App
