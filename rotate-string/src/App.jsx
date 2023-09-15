import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [text,setText]=useState('Madhav singh')

  // Let's create this small animation..
  useEffect(()=>{
    const internval = setInterval(() => {
      setText((prevText)=>prevText.substring(1) + prevText[0])
    }, 100);
  },[])
  return (
    <div>
      <h2>Problem-14: String Animation </h2>
      <button>
       <pre>
        {text}
       </pre>
        </button> 
    </div>
  )
}
// Thank's for Watching......

export default App;
