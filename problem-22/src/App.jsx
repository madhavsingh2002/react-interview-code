import { useState } from 'react'

import './App.css'

function App() {

const [first,setFirst]=useState('')
const [second,setSecond]=useState('')
const [result,setResult]=useState('')
const calculate =()=>{
  const num1= Number.parseInt(first)
  const num2= Number.parseInt(second)
  if(num1 ===50 || num2===50 || num1+ num2===50){
    setResult('Yes')
  }
  else{
    setResult('No')
  }
}
  return (
    <div>
      <h3>Problem-22: Write a  program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.</h3>
      <br /><label >Enter Your First Number:</label><br /><br />
      <input type="number" value={first} onChange={(e)=>setFirst(e.target.value)} /><br /><br />
      <label >Enter Your Second Number:</label><br /><br />
      <input type="number" value={second} onChange={(e)=>setSecond(e.target.value)} /><br /><br />
      <button onClick={calculate}>Calculate</button>
      <p>{result}</p>
    </div>
  )
}

export default App
