import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('Madhav singh ');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => prevText.substring(1) + prevText[0]);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h2>String Animation </h2>
      <pre>{text}</pre>
    </div>
  )
}

export default App;
