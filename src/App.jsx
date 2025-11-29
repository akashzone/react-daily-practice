
import './App.css'
import Lottery from './Lottery.jsx'
function App() {
  function winCondition(ticket) {
    return ticket.reduce((sum, curr)=> sum + curr, 0) === 15;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
