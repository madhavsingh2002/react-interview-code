
import './App.css'
import UserInfo from './UserInfo';

// Question 3: Conditional Rendering
// Create a functional component called UserInfo that takes a prop isLoggedIn 
// (a boolean) and conditionally renders either a "Welcome" message with the 
// user's name if isLoggedIn is true, or a "Please log in" message if isLoggedIn is false.

// Step-1: Create UserInfo..
// Step-2: Create props and islog
// This is simple example to understand the conditional rendering...
// Thank's for watching...
function App() {
  const islog= true;
  return (
    <>
     <button>
      <UserInfo islog={islog} />
     </button>
      
    </>
  )
}

export default App
