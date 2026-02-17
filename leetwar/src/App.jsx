import './App.css'
import { useState } from 'react'
import Battle from './components/Battle'

function App() {
  const [start, setStart] = useState(false)

  const buttonHandler = () => {
    setStart((prev) => !prev)
  }

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            20% { transform: rotate(16deg); }
            40% { transform: rotate(-8deg); }
            60% { transform: rotate(14deg); }
            80% { transform: rotate(-4deg); }
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-4 py-12 text-slate-100">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-8 text-center shadow-2xl backdrop-blur-sm">
          <div id="welcome-text" className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              LeetWar{' '}
              <span
                className="inline-block origin-[70%_70%]"
                style={{ animation: 'wave 1.6s ease-in-out infinite' }}
              >
                &#129302;
              </span>
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">Who&apos;s got a better profile?</p>
          </div>

          <div id="start-button">
            <button
              onClick={buttonHandler}
              id="start-btn"
              className="rounded-xl bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-105 hover:bg-cyan-400 active:scale-95"
            >
              Start Battle
            </button>
          </div>

          <div id="battle-component-renders-here" className="w-full">
            {start && <Battle />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
