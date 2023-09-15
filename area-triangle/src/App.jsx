import { useState } from 'react'

import './App.css'

function App() {
  // Let's resolve this problem....
  // Thank's for watching....
  const [side1, setSide1] = useState('')
  const [side2, setSide2] = useState('')
  const [side3, setSide3] = useState('')
  const [area, setArea] = useState(null)
  // Create the function of calculating the sides....
  const calculateArea=()=>{
    const s1 = parseFloat(side1)
    const s2 = parseFloat(side2)
    const s3 = parseFloat(side3)
    if(isNaN(s1) || isNaN(s2)|| isNaN(s3)){
      alert('Please enter the sides...')
      return
    }
    const s = (s1+s2+s3)/2;
    const calculateArea = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)).toFixed(2)// for around of area to two decimal only .. like 12.00..
    setArea(calculateArea)
  }
  // create the input form 
  // color: '#6677cc'
  return (
    <div>
      <h2 style={{color:'#6677cc'}}>Triangle Area Calculation</h2>
      <h3>Problem-13: Write a program to find the area of a triangle where three sides.</h3>
      <div>
        <label htmlFor="">Side-1: </label>
        <input type="number"  value={side1} onChange={(e)=>setSide1(e.target.value)}/>
      </div>
      <br />
      <div>
        <label htmlFor="">Side-2: </label>
        <input type="number" value={side2} onChange={(e)=>setSide2(e.target.value)} />
      </div>
      <br />
      <div>
        <label htmlFor="">Side-3: </label>
        <input type="number" value={side3} onChange={(e)=>setSide3(e.target.value)} />
      </div>
      <br />
      <button onClick={calculateArea}>Calculate</button>
      <br />
      <p>Area:{area} </p>

    </div>
  )
}

export default App
