
import './App.css'
import TodoList from './Todo.jsx';


function App() {

   const todos = ['Buy groceries', 'Clean the house', 'Take out the trash'];

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App
