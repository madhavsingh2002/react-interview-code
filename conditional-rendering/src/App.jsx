
import './App.css'
import UserInfo from './UserInfo.jsx';

function App() {
  const isLoggedIn = true;
  return (
    <>
     <div>
      <button>

      <UserInfo isLoggedIn={isLoggedIn} />
      </button>
    </div>
      
    </>
  )
}

export default App
