import React from 'react'

import style from './Scoreboard.module.scss'

const Scoreboard = () => {
  const score = 5
  const topScore = 10

  return (
    <div className={style.scoreboard}>
      <p>Score: {score}</p>
      <p>Best: {topScore}</p>
    </div>
  )
}

export default Scoreboard
