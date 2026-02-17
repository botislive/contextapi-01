import { useState } from 'react'
import BattleCard from './BattleCard'
import fetchInfo from '../utils/fetchInfo'
import fetchResult from '../utils/fetchResults'
import ResultCrd from './ResultCrd'
const Battle = () => {
    const [username1, setUsername1] = useState('')
    const [username2, setUsername2] = useState('')
    const [startBattle, setStartBattle] = useState(false)
    const[data1, setData1] = useState(null)
    const[data2, setData2] = useState(null)
    const[showResults, setShowResults] = useState(false)
    const[result, setResult] = useState(null)

const battleHandler = async () => {
    if (!username1 || !username2) {
        alert("Enter both usernames")
        return
    }

    try {
        const { userdata1, userdata2 } = await fetchInfo(username1, username2)
        setData1(userdata1)
        setData2(userdata2)
        setStartBattle(true)

         const result = await fetchResult(username1, username2) 
         setResult(result)
         console.log(result)
         setShowResults(true) 
           
                
        }

     catch {
        alert("Error fetching users")
    }
}


  return (
    <div>
           <div id='battle component'>
                <h1>Battle Out here</h1>
                <h2>Enter Your LeetCode Usernames</h2>
           </div>

           <div id='taking inputs'>
                <label htmlFor="Username1">First Player</label>
                <input type="text" placeholder='Enter Your Username' id='Username1'
                value={username1}
                onChange={(e)=>setUsername1(e.target.value)}
                 /><br />
                <label htmlFor="Username2">Second Player</label>
                <input type="text" placeholder='Enter Your Username' id='Username2'
                value={username2}
                onChange={(e)=>setUsername2(e.target.value)}
                /><br />
           </div>

            <div id='battle button'>
                <button id='battle-btn'
                onClick={battleHandler}
                >Battle</button>
            </div>

            <div id='battle cards render here'>
                {startBattle && <BattleCard  username={username1} userdata={data1} />}
                {startBattle && <BattleCard  username={username2} userdata={data2} />}
            </div>

               {startBattle? <div>
                  {showResults? <ResultCrd result={result} username1={username1} username2={username2}/> : <p>Calculating Results...</p>}             
               </div>: <p>Enter Usernames and Start Battle</p>}

    </div>
  )
}

export default Battle
