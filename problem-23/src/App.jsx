import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Let's solve this problem....
  const [number, setNumber]= useState('')
  const [result, setResult]=useState('')
  // Let' create the function....
  const checkNumber =()=>{
    const num = parseInt(number)
    if(isNaN(num)){
      setResult('Please enter a valid number')
    }
    else{
      const isWithIn20of100 = Math.abs(100-num)<=20;
      const isWithIn20of400 = Math.abs(400-num)<=20;
      if(isWithIn20of100 ||isWithIn20of400){
        setResult('The number is within 20 of 100 or 400')
      }
      else{
        setResult('the Number is not within 20 of 100 or 400')
      }
    }
  }
  return (
    <div>
    <h3>Problem-23: Write program to check whether a given integer is within 20 of 100 or 400.</h3>
    <label >Enter a number:</label>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
   <br /><br /> <button onClick={checkNumber}>Check</button>
   <p>{result} </p>
  </div>
  )
}
// Thank's for watching..........
export default App
