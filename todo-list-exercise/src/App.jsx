import React, { useState } from 'react'
import './App.css'
// Exercise-6: Basic To-Do list app
// Step-1: Create the form and ul-li
// Step-2: Create onsubmit...
// Step-3: Display the todo..
// Step-4: Create the Delete func..
function App() {
 const [todo,setTodo]=useState([]);
 const [task,setTask]=useState('')
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(task.trim()!==''){
    setTodo([...todo,task])
    setTask('')
  }
 };
 const handleDelete=(index)=>{
    const updateTodo=[...todo];
    updateTodo.splice(index,1);
    setTodo(updateTodo)
 };
  return (
    <div className='App'>
      <h2>Todo-list</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter your todo'/>
        <button>Add</button>
      </form>
      <ul>
        {
          todo.map((item,index)=>(
            <li key={index}>{item}  <button onClick={()=>handleDelete(index)}>Delete</button></li> 
          ))
        }
      </ul>
    </div>
  )
}

export default App