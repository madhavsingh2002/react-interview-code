import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Let's create this....
  const [year, setYear] =useState('')
  const [isLeap,setIsLeap] =useState(null)
  const checkLeapYear=()=>{
    const inputYear =parseInt(year)
    if(isNaN(inputYear)){
      alert('Please Enter a Valid Year')
      return
    }
    const isLeapYear = new Date(inputYear,1,29).getMonth()===1;
    setIsLeap(isLeapYear)
  }
  return (
    <div>
      <h2>Problem-15: Leap Year Checker</h2>
      <label >Enter a Year:</label><br />
      <input type="number" value={year} onChange={(e)=>setYear(e.target.value)} /><br />
      <br />
      <button onClick={checkLeapYear}>Check</button>
      {
        isLeap!==null && (
          <p>
            {year} is Leap Year: {isLeap.toString()}
          </p>
        )
      }
    </div>
  )
}
// Thanks' for watching..
export default App
