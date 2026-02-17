import React from 'react'

const ResultCrd = ({ result, username1, username2, data1, data2 }) => {
  console.log(result)

  const winnerName = result?.winner || ''
  const isUser1Winner = winnerName.toLowerCase() === username1.toLowerCase()
  const winnerAvatar = isUser1Winner ? data1?.profile?.userAvatar : data2?.profile?.userAvatar

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-cyan-400/25 bg-slate-900/80 p-6 text-slate-100 shadow-xl shadow-cyan-900/20 backdrop-blur-sm">
      <div className="mb-5 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">Battle Result</p>
        {winnerAvatar && (
          <img
            src={winnerAvatar}
            alt={`${winnerName} profile`}
            className="mx-auto mt-4 h-20 w-20 rounded-full border-2 border-cyan-400/50 object-cover shadow-lg shadow-cyan-900/30"
          />
        )}
        <p className="mt-2 text-lg text-slate-200">
          And the winner is:{' '}
          <span className="rounded-md bg-cyan-400/15 px-2 py-1 text-2xl font-extrabold text-cyan-300">
            {result.winner}
          </span>
        </p>
        <p className="mt-3 text-sm text-slate-300">{result.reason}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">{username1}</p>
          <p className="mt-1 text-xl font-bold text-cyan-300">{result.score.user1}</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">{username2}</p>
          <p className="mt-1 text-xl font-bold text-cyan-300">{result.score.user2}</p>
        </div>
      </div>
    </div>
  )
}

export default ResultCrd
