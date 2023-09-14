import { useState } from 'react'

import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayedText(inputText);
    setInputText('');
  };
  return (
    <div>
      <input
        type="text" 
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
      /> <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>Entered Text: {displayedText}</p>
    </div>
  )
}

export default App
