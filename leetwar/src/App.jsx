import './App.css'
import { useState } from 'react'
import Battle from './components/Battle'
function App() {

    const [start, setStart] = useState(false)
    const buttonHandler = () => {
        setStart((prev) => !prev)
        console.log(start)
    }

  return (
      <>
          <div>
            <div id='welcome text'>
                <h1>LeetWar 🤖</h1>
                <p>Who's gottta better profile ?</p>
            </div>

            <div id='start button'>
                <button 
                onClick={buttonHandler}
                id='start-btn'>Start</button>
            </div>
    
            <div id='battle component renders here'>
                {start && <Battle />}
            </div>

          </div>
      </>
  )
}

export default App
