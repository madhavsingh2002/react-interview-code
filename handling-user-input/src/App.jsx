import { useState } from 'react'
// Exercise 5: Handling User Input
// Create a functional component called TextInput that includes an input field and a button. 
// When the user types something into the input field and clicks the button, 
// the entered text should be displayed below the input field. 

// Step-1: Create the input and button...
// Step-2: Create the state...
// Step-3: create HandleInput and HandleSubmit function...
// Thanks for watching...
import './App.css'
function App() {
  const [inputText,setInputText]=useState('')
  const [displayedText,setDisplayedText]=useState('')
  const handleInput=(e)=>{
    setInputText(e.target.value);
  }
  const HandleSubmit=()=>{
    setDisplayedText(inputText)
    setInputText('')
  }
  return (
   <>
    <div>
      <input type="text" value={inputText}  onChange={handleInput}/>
      <button onClick={HandleSubmit}>Submit</button>
      <p>Entered Text:{displayedText} </p>
    </div>
   </>
  )
}

export default App
