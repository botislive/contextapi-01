import { useState } from 'react'
import BattleCard from './BattleCard'
import fetchInfo from '../utils/fetchInfo'
import fetchResult from '../utils/fetchResults'
import ResultCrd from './ResultCrd'
const Battle = () => {
  const [username1, setUsername1] = useState('')
  const [username2, setUsername2] = useState('')
  const [startBattle, setStartBattle] = useState(false)
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [result, setResult] = useState(null)

  const battleHandler = async () => {
    if (!username1 || !username2) {
      alert('Enter both usernames')
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
    } catch {
      alert('Error fetching users')
    }
  }

  return (
    <div className="space-y-8">
      <div id="battle-component" className="space-y-2 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-cyan-300 sm:text-4xl">Battle out here</h1>
        <h2 className="text-sm text-slate-300 sm:text-base">Enter Your LeetCode Usernames...</h2>
      </div>

      <div
        id="taking-inputs"
        className="grid grid-cols-1 items-end gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-5 sm:grid-cols-[1fr_auto_1fr]"
      >
        <div className="space-y-2 text-left">
          <label htmlFor="Username1" className="block text-sm font-medium text-slate-200">
            First Player
          </label>
          <input
            type="text"
            placeholder="Enter Your Username"
            id="Username1"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>

        <div className="mx-auto rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300">
          VS
        </div>

        <div className="space-y-2 text-left">
          <label htmlFor="Username2" className="block text-sm font-medium text-slate-200">
            Second Player
          </label>
          <input
            type="text"
            placeholder="Enter Your Username"
            id="Username2"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>
      </div>

      <div id="battle-button" className="text-center">
        <button
          id="battle-btn"
          onClick={battleHandler}
          className="rounded-xl bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-400 active:scale-95"
        >
          Battle
        </button>
      </div>

      <div id="battle-cards-render-here" className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {startBattle && <BattleCard username={username1} userdata={data1} />}
        {startBattle && <BattleCard username={username2} userdata={data2} />}
      </div>

      {startBattle ? (
        <div className="text-center">
          {showResults ? (
            <ResultCrd
              result={result}
              username1={username1}
              username2={username2}
              data1={data1}
              data2={data2}
            />
          ) : (
            <p className="text-slate-300">Calculating Results...</p>
          )}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-400">Enter usernames and start battle.</p>
      )}
    </div>
  )
}

export default Battle
