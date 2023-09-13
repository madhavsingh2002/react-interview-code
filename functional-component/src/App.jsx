import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Exercise 1: Create a Functional Component
// Create a functional component called Greeting that renders a <div> containing a greeting message. 
// The greeting message should be passed as a prop to the component. 

function App() {
  function Greeting(props) {
    return <div>{props.message}</div>;
  }
  
  return (
    <>
      
      <div>
      <Greeting message="Hello, React!" />
    </div>
    </>
  )
}

export default App
