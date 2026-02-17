import React from 'react'

const ResultCrd = ({result,username1,username2}) => {
    console.log(result)
  return (
    <div>
        <div>
        And The Winner is : <span className='font-bold text-xl'>{result.winner}</span>
        <p>{result.reason}</p>
        </div>
        <p>The Score of {username1} is : {result.score.user1}</p>
        <p>The Score of {username2} is : {result.score.user2}</p>
        <div>
        </div>
    </div>
  )
}

export default ResultCrd