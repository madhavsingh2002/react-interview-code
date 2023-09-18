import { useState } from 'react'

import './App.css'

function App() {
  const [first,setFirst]=useState('')
  const [second,setSecond] =useState('')
  const [result,setResult]=useState('')
  const calculate=()=>{
    if (!isNaN(first) && !isNaN(second)) {
      if (first === second) {
        setResult(`${(parseInt(first) + parseInt(second)) * 3}`);
      } else {
        setResult(`${parseInt(first) + parseInt(second)}`);
      }
    } else {
      setResult('Please enter valid numbers.');
    }
  };
  return (
    <div>
      <h3>Proble-20: Write a  program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.</h3>
      <label >Enter your first Number:</label>
      <br /><br />
      <input type="number" value={first} onChange={(e)=>setFirst(e.target.value)}/><br /><br />
      <label >Enter your Second Number:</label>
      <br /><br />
      <input type="number" value={second} onChange={(e)=>setSecond(e.target.value)} /> <br /><br />
      <button onClick={calculate}>Convert</button>
      <p>{result} </p>
    </div>
  )
}

export default App
