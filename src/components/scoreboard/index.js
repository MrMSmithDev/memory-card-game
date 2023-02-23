import { appContext } from '@app'
import React, { useContext } from 'react'

import style from './Scoreboard.module.scss'

const Scoreboard = () => {
  const { currentScore, bestScore } = useContext(appContext)

  return (
    <div className={style.scoreboard}>
      <p style={currentScore === 0 ? { color: '#E90064' } : null}>Score: {currentScore}</p>
      <p>Best: {bestScore}</p>
    </div>
  )
}

export default Scoreboard
