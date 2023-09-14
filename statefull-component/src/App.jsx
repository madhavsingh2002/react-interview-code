import { useState } from 'react'

import './App.css'
function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}
function App() {

  return (
    <>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
