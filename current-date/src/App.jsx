import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const formats = [
    `${mm}-${dd}-${yyyy}`,
    `${mm}/${dd}/${yyyy}`,
    `${dd}-${mm}-${yyyy}`,
    `${dd}/${mm}/${yyyy}`,
  ];
  return (
    <div>
      <h2>Current Date Formats:</h2>
      <h3>Problem-12: Write a JavaScript program to get the current date. <br />
<span style={{color:'#6677cc'}}>Expected Output : <br />
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy</span></h3>
      <ul>
        {formats.map((format, index) => (
          <li key={index}>{format}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
