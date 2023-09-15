
import './App.css'

function App() {
  function printer(){
    window.print()
  }
  return (
    <>
      <h3>Problem-11: Write a program to print the current window contents.</h3>
      <p>Click the button to print the current page.</p>
      <button onClick={printer}>Print</button>
    </>
  )
}

export default App
