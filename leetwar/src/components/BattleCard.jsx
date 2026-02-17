const BattleCard = ({ username, userdata }) => {
  if (!userdata) {
    return (
      <p className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 text-center text-slate-300">
        Loading {username}...
      </p>
    )
  }

  const stats = userdata.submitStats?.acSubmissionNum || []

  const total = stats.find((s) => s.difficulty === 'All')?.count || 1

  const colors = {
    Easy: 'bg-emerald-400',
    Medium: 'bg-amber-400',
    Hard: 'bg-rose-400',
  }

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6 text-slate-100 shadow-xl shadow-cyan-900/20 backdrop-blur-sm">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="truncate text-lg font-bold tracking-tight text-cyan-200">{username}</h1>
        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-1 text-xs font-semibold text-cyan-300">
          Player
        </span>
      </div>

      <img
        src={userdata.profile?.userAvatar}
        alt="profile"
        className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-cyan-400/50 object-cover shadow-lg shadow-cyan-900/30"
      />

      <div className="mb-5 space-y-1 text-sm text-slate-300">
        <p>{userdata.profile?.countryName || 'Country not available'}</p>
        <p className="font-medium text-slate-200">Rank: {userdata.profile?.ranking}</p>
      </div>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">Submission Stats</h3>

      <div className="space-y-3">
        {stats
          .filter((s) => s.difficulty !== 'All')
          .map((stat) => {
            const percent = (stat.count / total) * 100

            return (
              <div key={stat.difficulty}>
                <div className="mb-1 flex justify-between text-xs text-slate-300">
                  <span>{stat.difficulty}</span>
                  <span className="font-semibold text-slate-200">{stat.count}</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-slate-700/80">
                  <div
                    className={`h-2.5 rounded-full ${colors[stat.difficulty]}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BattleCard
