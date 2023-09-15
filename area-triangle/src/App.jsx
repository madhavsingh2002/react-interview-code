import { useState } from 'react'

import './App.css'

function App() {
  const [side1, setSide1] = useState('');
  const [side2, setSide2] = useState('');
  const [side3, setSide3] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const s1 = parseFloat(side1);
    const s2 = parseFloat(side2);
    const s3 = parseFloat(side3);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
      alert('Please enter valid side lengths');
      return;
    }

    const s = (s1 + s2 + s3) / 2;
    const calculatedArea = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3)).toFixed(2);
    setArea(calculatedArea);
  };

  return (
    <div>
      <h2>Triangle Area Calculation</h2>
      <label>
        Side 1:
        <input type="number" value={side1} onChange={(e) => setSide1(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Side 2:
        <input type="number" value={side2} onChange={(e) => setSide2(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Side 3:
        <input type="number" value={side3} onChange={(e) => setSide3(e.target.value)} />
      </label>
      <br />
      <br />
      <button onClick={calculateArea}>Calculate Area</button>
      {area !== null && <p>Area: {area}</p>}
    </div>
  )
}

export default App
