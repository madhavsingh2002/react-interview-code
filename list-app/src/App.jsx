import { useState } from 'react'

import './App.css'
import ListForm from './ListForm.jsx';
import ListDisplay from './ListDisplay.jsx';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div className='App'>
    <h1>List App</h1>
    <ListForm onAddItem={addItem} />
    <ListDisplay items={items} />
  </div>
  )
}

export default App
