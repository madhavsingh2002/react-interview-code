import { useState } from 'react'

import './App.css'
/*
The centigrade to Fahrenheit conversion formula is:
 fToCel = ((fTemp - 32) * 5) / 9;
 cToFahr = (cTemp * 9) / 5 + 32;
*/ 
function App() {
//  Let's solve this problem.........
// let's create the input fields first....
// Let's create the function....
 const [cel,setCel] =useState('')
 const [fah,setFah] =useState('')
 const [celResult,setCelResult] =useState('')
 const [fahResult,setFahResult] =useState('')
//  let's write function for celsius to fah...

 const celToFah =()=>{
  const ctemp = parseFloat(cel);
  if(!isNaN(ctemp)){
    const cToFah=( (ctemp * 9) / 5 + 32);
    setFahResult(`${ctemp}\xB0C is ${cToFah}\xB0C `)
  }
 }// let's connect it...
//  Let's write function for fah to celsius....
const fahToCel =()=>{
  const fTemp= parseFloat(fah)
  if(!isNaN(fTemp)){
    const fToCel = ((fTemp - 32) * 5) / 9;// this formula already given in questions
    setCelResult(`${fTemp}\xB0C is ${fToCel}\xB0C `)
  }
  else{
    setCelResult('Please Enter a valid fahrenheit temperature...')
  }
}
  return (
<div>
      <h2>Problem-19:Write a program to convert temperatures to and from celsius, fahrenheit.</h2>
      <label >Enter Celsius Temperature: </label>
      <input type="number" value={cel} onChange={(e)=>setCel(e.target.value)} /> <br /><br />
      <button onClick={celToFah}>Convert</button><br /><br />
      <p>{fahResult} </p>
      <label >Enter Fahrenheit Temperature: </label>
      <input type="number" value={fah} onChange={(e)=>setFah(e.target.value)} /> <br /><br />
      <button onClick={fahToCel}>Convert</button><br />
      <p>{celResult} </p>
    </div>
  )
}
// Thank's for watching.........

export default App
