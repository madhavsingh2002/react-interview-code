
import './App.css'

function App() {
  function print_current_page()
{
window.print();
}
  return (
    <>
      <h3>Write a program to print the current window contents.</h3>
      <p>Click the button to print the current page.</p>
      <button onClick={print_current_page}>Print this page</button>
    </>
  )
}

export default App
