
import './App.css'

function App() {
  // Let's solve this problem...
  const today = new Date()// to get the date
  const dd= String(today.getDate()).padStart(2,'0');// to get the date like 12/13/14 something like this...
  const mm = String(today.getMonth()+1).padStart(2,'0');// to get the month...
  const yyyy=String(today.getFullYear());
  
  // let format them according to need...
  const formats=[
    `${mm}-${dd}-${yyyy}`,
    `${mm}/${dd}/${yyyy}`,
    `${dd}-${mm}-${yyyy}`,
    `${dd}/${mm}/${yyyy}`,
  ]
// let's map them
// thank's for watching....
  return (
    <div>
      <h2>Current Date Formats:</h2>
      <h3>Problem-12: Write a  program to get the current date. <br />
        <span style={{ color: '#6677cc' }}>Expected Output : <br />
          mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy</span></h3>
      <ul>
        {
          formats.map((item,index)=>(
            <li key={index}>{item} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
