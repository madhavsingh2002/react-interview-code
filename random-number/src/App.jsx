import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Let's create this simple Exercise....
  // Step-1: Input form...
  // Step-2: Logic 
  const [num] =useState(Math.ceil(Math.random()*10))
  const [guess,setGuess]=useState('')
  const [result,setResult] = useState('')
  const checkGuess=()=>{
    const guessedNumber = parseInt(guess)
    if(isNaN(guessedNumber)){
      setResult('Please Enter a Valid Number');
    }
    else if( guessedNumber==num){
      setResult('Matched')
    }
    else{
      setResult(`not Matched, the  number is ${num}`)
    }
  }
  return (
    <div>
      <h2>Problem-16: Number Guessing Game</h2>
      <p>Guess the number between 1 and 10 inclusive:</p>
      <input type="number" value={guess} onChange={(e)=>setGuess(e.target.value)} />
      <br /><br />
      <button onClick={checkGuess}>Check</button>
      <p>{result} </p>
    </div>
  )
}
// Thank's for watching......
export default App
