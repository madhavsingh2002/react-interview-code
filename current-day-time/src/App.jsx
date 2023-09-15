import { useEffect, useState } from 'react'

import './App.css'

function App() {
  // Let's rewrite it...
  const [currentDate, setCurrentDate]=useState(new Date())
  useEffect(()=>{
    const interval =setInterval(() => {
      setCurrentDate(new Date())

    }, 1000);
    return ()=> clearInterval(interval)
  },[])
  //  Daylist...
  const daylist=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  // CurrentDate
  const day = daylist[currentDate.getDay()] // console.log...this is one
  let hour = currentDate.getHours()
  let minute=currentDate.getMinutes()
  let second=currentDate.getSeconds()
  let prepand =hour>=12? "PM":" AM";
  hour=hour>=12?hour-12:hour;
  if(hour===0 && prepand ===' PM'){// this will format our time according to noon and pm 
    if(minute===0 &&second===0){
      hour=12;
      prepand =' Noon'
    }
    else{
      hour=12;
      prepand=' PM'
    }
  } 
  // Now for am and midnight..
  if(hour===0 && prepand===' AM'){
    if(minute===0 && second===0){
      hour=12;
      prepand=" Midnight"// 00.00 around this time
    }
    else{
      hour=12;
      prepand=' AM' // after 12.00 in the morning..
    }
  }
  // Thank's for Watching.....
  return (
    <div>
      <h4>Problem-10: Write a program to display the current day and time in the following format.   <br />
        Sample Output : Today is : Tuesday. <br />
        Current time is : 10 PM : 30 : 38</h4>
        <p>Today is:{day} </p>
      <p>Current Time:{hour} {prepand} : {minute} : {second} </p>
      
    </div>
  )
}

export default App
