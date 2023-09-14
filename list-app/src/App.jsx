import { useState } from 'react'

import './App.css'
import ListForm from './ListForm.jsx';
import ListDisplay from './ListDisplay.jsx';
// Let's Create Simple List-App...
// Step-1: Create ListForm to submit the list...
// Thank's for Watching...
function App() {
  const [item,setItem]=useState([])
  const addItem =(newItem)=>{
    setItem([...item,newItem])
  }
  return (
    <div className='App'>
      <h1>List-App</h1>
      <ListForm onAddItem={addItem}/>
      <ListDisplay items={item} />
  </div>
  )
}

export default App
