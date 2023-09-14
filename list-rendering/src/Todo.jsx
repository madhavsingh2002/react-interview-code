import React from 'react'

function TodoList(prop) {
    const todoList = prop.todos.map((item,index)=>(
        <li key={index}> {item} </li>
    ))
  return (
   
        <ul>
            {todoList}
        </ul>
    
  )
}

export default TodoList