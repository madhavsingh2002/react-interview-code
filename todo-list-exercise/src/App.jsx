import React, { useState } from 'react'
import './App.css'
// Exercise-6: Basic To-Do list app
function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState(""); // State to hold the input task
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (task.trim() !== "") {
      setTodo([...todo, task]); // Add the new task to the todo array
      setTask(""); // Clear the input field
    }
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1); // Remove the task at the specified index
    setTodo(updatedTodo);
  };

  return (
    <div className='App'>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
        placeholder="Enter Your Task"
      />
      <button type="submit">Add</button>
    </form>
      <ul>
      {todo.map((task, index) => (
            <li
              key={index}
              
            >
              {task}
             <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App