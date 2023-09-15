import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num] = useState(Math.ceil(Math.random() * 10));
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const checkGuess = () => {
    const guessedNumber = parseInt(guess);
    
    if (isNaN(guessedNumber)) {
      setResult('Please enter a valid number.');
    } else if (guessedNumber === num) {
      setResult('Matched');
    } else {
      setResult(`Not matched, the number was ${num}`);
    }
  };
  return (
    <div>
      <h2>Number Guessing Game</h2>
      <p>Guess the number between 1 and 10 inclusive:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <br />
      <br />
      <button onClick={checkGuess}>Check</button>
      <br />
      <br />
      <button>
      <p>{result}</p>
      </button>
      
    </div>
  )
}

export default App
