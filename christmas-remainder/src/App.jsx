
import './App.css'

function App() {
  // Let's create it from scrach....
  const today =  new Date()// get the today's day
  const christmas =  new Date(today.getFullYear(),11,25);// get the christmas day....
  {
    console.log(christmas)
  }
  if(today.getMonth()===11 && today.getDate()>25){
    christmas.setFullYear(christmas.getFullYear()+1);
  }// We cross the christmas day, this will reset the day for upcoming christmas....
  const oneDay =  1000*60*60*24;
  const daysLeft = Math.ceil((christmas.getTime()-today.getTime())/oneDay)
  return (
    <div>
    <h2>Problem-17: Days Until Christmas</h2>
    <h3>Calculate How Many Days left for Christmas</h3>
    <p> {daysLeft} days left until Christmas!</p>
  </div>
  )
}
// Thank's for watching....
export default App
