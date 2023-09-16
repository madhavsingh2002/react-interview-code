
import './App.css'

function App() {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

  return (
    <div>
    <h2>Problem-17: Days Until Christmas</h2>
    <p>{daysLeft} days left until Christmas!</p>
  </div>
  )
}

export default App
