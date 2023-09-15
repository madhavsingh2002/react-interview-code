import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = daylist[currentDate.getDay()];

  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let prepand = hour >= 12 ? " PM" : " AM";
  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prepand === ' PM') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Noon';
    } else {
      hour = 12;
      prepand = ' PM';
    }
  }

  if (hour === 0 && prepand === ' AM') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Midnight';
    } else {
      hour = 12;
      prepand = ' AM';
    }
  }

  return (
    <div>
    <p>Today is: {day}.</p>
    <p>Current Time: {hour + prepand} : {minute} : {second}</p>
  </div>
  )
}

export default App
