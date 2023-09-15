import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [year, setYear] = useState('');
  const [isLeap, setIsLeap] = useState(null);

  const checkLeapYear = () => {
    const inputYear = parseInt(year);

    if (isNaN(inputYear)) {
      alert('Please enter a valid year.');
      return;
    }

    const isLeapYear = new Date(inputYear, 1, 29).getMonth() === 1;
    setIsLeap(isLeapYear);
  };
  return (
    <div>
      <h2>Problem-15: Leap Year Checker</h2>
      <label>
        Enter a year:
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={checkLeapYear}>Check Leap Year</button>
      {isLeap !== null && (
        <p>
          {year} is a leap year: {isLeap.toString()}
        </p>
      )}
    </div>
  )
}

export default App
