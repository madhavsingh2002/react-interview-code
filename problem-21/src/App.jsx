import { useState } from 'react'

import './App.css'

function App() {
  // Let' solve tjhis problem....
  // Step-1: Create the form........
  // Step-2: Create the function.....

  const [num,setNum]=useState('')
  const [result,setResult]=useState('')
  const calculate=()=>{
    const n = parseInt(num)// user number
    if(!isNaN(n)){
      if(n<=19){
       setResult(`Absolute Diff : ${19-n}`);
      }
      else{
        setResult(`Triple Diff: ${(n-19)*3}`)
      }
    }
  }// let's connect this function......
  // Thank's for watching.........
  return (
    <div>
      <h3>Problem-21: Write a  program to compute the absolute difference between a specified number and 19. <br />
         Returns triple the absolute difference if the specified number is greater than 19.</h3>
         <label >Enter the Number</label><br />
         <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/><br /><br />
         <button onClick={calculate}>Check</button>
         <p>{result}</p>
    </div>
  )
}

export default App
