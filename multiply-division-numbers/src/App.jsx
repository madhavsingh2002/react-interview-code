import { useState } from 'react'

import './App.css'

function App() {
  // Let's resolve this question....
  // Step-1: Create the form field....
  // Step-2: Create the multiply and divide function...
  // Step-3: Let's these function with form..
  const [firstNumber,setFirstNumber]= useState('')
  const [secondNumber,setSecondNumber] =useState('')
  const [result,setResult]= useState('')
  const multiply =()=>{
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber)
    if(isNaN(num1) || isNaN(num2)){
      setResult('Please Enter a valid number')

    }
    else{
      setResult(`Multiply Result: ${num1*num2}`)
    }
  }
  const Divide =()=>{
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(secondNumber)
    if(isNaN(num1) || isNaN(num2)){
      setResult('Please Enter a valid number')

    }
    else if(num2===0) {
      setResult('Division by zero is not allowed')
    }
    else{
      setResult(`Multiply Result: ${num1/num2}`)
    }
  }
  return (
    <div>
      <h3>Probem-18: Write a program to calculate multiplication and division of two numbers (input from the user).</h3>
      <h4>Solution:</h4>
      <label >Enter first Number:</label> <br />
      <input type="number" value={firstNumber} onChange={(e)=>setFirstNumber(e.target.value)}/> <br />
      <label >Enter second Number:</label><br />
      <input type="number" value={secondNumber} onChange={(e)=>setSecondNumber(e.target.value)} />
      <br />
      <button onClick={multiply}>Multiply</button> <button onClick={Divide}>Divide</button>
      <p>Result:
        <span>{result} </span>
      </p>
    </div>
 
  )
}
// Thank's for watchibg.....
export default App
