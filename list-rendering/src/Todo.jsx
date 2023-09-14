import React from 'react'

function TodoList(props) {
    const todoItems = props.todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ));
  
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }

export default TodoList