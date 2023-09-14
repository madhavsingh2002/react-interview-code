
import './App.css'
import TodoList from './Todo.jsx';
// Exercise 4: List Rendering
// Create a functional component called TodoList that takes an array of todo items 
// as a prop and renders an unordered list (<ul>) containing each todo item as a list
// item (<li>). Each todo item should have a unique key. 
// You can use a simple array of strings as your todo list.

// Step-1: Create simple Array for todo list...
// Step-2: Create component to render this list...
// Step-3: take todos as props
// Step-4: Inside the todo.jsx let's create map...
function App() {

   const todos =['item1','item2','item3']
  return (
    <div>
      <h1>Todo List:</h1>
      
      <TodoList todos={todos} />
    </div>
  );
}

export default App
