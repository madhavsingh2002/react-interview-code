import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Exercise 1: Create a Functional Component
// Create a functional component called Greeting that renders a <div> containing a greeting message. 
// The greeting message should be passed as a prop to the component. 

function App() {
  // Step-1: Greeting function...
  function Greeting(props){
    return <div>{props.message} </div>
  }
  return (
    <>
      <div>
        <Greeting message="Hello,React!" />
      </div>

    </>
  )
}
// In video, we get to know about function component and props...
// Thank's for watching...
export default App
