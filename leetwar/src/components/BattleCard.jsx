const BattleCard = ({ username, userdata }) => {

  if (!userdata) return <p>Loading {username}...</p>;

  const stats = userdata.submitStats?.acSubmissionNum || [];

  const total =
    stats.find(s => s.difficulty === "All")?.count || 1;

  const colors = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-400",
    Hard: "bg-red-500",
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow w-72 text-center">

      
      <img
        src={userdata.profile?.userAvatar}
        alt="profile"
        className="w-24 h-24 mx-auto rounded-full mb-3"
      />

      <h1 className="text-lg font-semibold">{username}</h1>

      <p className="text-sm">
        {userdata.profile?.countryName}
      </p>
      <p className="text-sm mb-3">
        Rank: {userdata.profile?.ranking}
      </p>

      {/* Submission Stats */}
      <h3 className="text-md font-semibold mb-2">
        Submission Stats
      </h3>

      {stats
        .filter(s => s.difficulty !== "All")
        .map(stat => {
          const percent = (stat.count / total) * 100;

          return (
            <div key={stat.difficulty} className="mb-3">

              <div className="flex justify-between text-xs mb-1">
                <span>{stat.difficulty}</span>
                <span>{stat.count}</span>
              </div>

              <div className="w-full bg-gray-300 rounded h-2">
                <div
                  className={`h-2 rounded ${colors[stat.difficulty]}`}
                  style={{ width: `${percent}%` }}
                />
              </div>

            </div>
          );
        })}
    </div>
  );
};

export default BattleCard;
