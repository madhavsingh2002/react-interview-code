import { useState } from 'react'

import './App.css'
// Let's solve this problem..
// Step-1: Create the input fields..
// Step-2: Create the Function...
function App() {
  const [first,setFirst]=useState('')
  const [second,setSecond]=useState('')
  const [Result,SetResult]=useState('')
 const  calculate =()=>{
    if(!isNaN(first) || !isNaN(second)){
      if(first===second){
        SetResult(`${(parseInt(first)+ parseInt(second))*3}`)
      }
      else{
        SetResult(`${(parseInt(first)+ parseInt(second))}`)
      }
    }
 }
 // let's connect this function to the input field...
  return (
    <div>
      <h3>Proble-20: Write a  program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.</h3><br />
      <label >Enter the First Number:</label>
      <br /><br />
      <input type="number"  value={first} onChange={(e)=>setFirst(e.target.value)} /><br /><br />
      <label >Enter the Second Number:</label><br /><br />
      <input type="number" value={second} onChange={(e)=>setSecond(e.target.value)} /><br /><br />
      <button onClick={calculate} >Calculate</button>
      <p >{Result}</p>
    </div>
  )
}
// Thank's for watching............
export default App
