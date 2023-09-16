import { useState } from 'react'

import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const multiplyBy = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers.');
    } else {
      setResult(`Multiplication Result: ${num1 * num2}`);
    }
  };

  const divideBy = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers.');
    } else if (num2 === 0) {
      setResult('Division by zero is not allowed.');
    } else {
      setResult(`Division Result: ${num1 / num2}`);
    }
  };

  return (
    <div>
      <h3>Probem-18: Write a program to calculate multiplication and division of two numbers (input from the user).</h3>
      <form>
        <label>
          1st Number: 
          <input type="text" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
        </label>
        <br />
        <label>
          2nd Number: 
          <input type="text" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="button" onClick={multiplyBy}>Multiply</button> <br /> <br />
        <button type="button" onClick={divideBy}>Divide</button>
      </form>
      <p>The Result is : <br />
        <span id="result">{result}</span>
      </p>
    </div>
 
  )
}

export default App
