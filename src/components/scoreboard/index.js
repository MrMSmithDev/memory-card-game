import { appContext } from '@app'
import React, { useContext, useEffect, useState } from 'react'

import style from './Scoreboard.module.scss'

const Scoreboard = () => {
  const { currentScore, bestScore } = useContext(appContext)
  const [currentColor, setCurrentColor] = useState('#E90064')
  const [bestColor, setBestColor] = useState('#fff')

  // Check currentScore to set score color appropriately
  useEffect(() => {
    if (currentScore === bestScore && bestScore !== 0) {
      // If currentScore === bestScore set colors to blue
      setBestColor('#3A98B9')
      setCurrentColor('#3A98B9')
    } else {
      // Set currentScore to red if zero or white if between zero and bestScore
      if (currentScore != 0 && currentScore != 12) setCurrentColor('#fff')
      else currentScore === 0 ? setCurrentColor('#E90064') : setCurrentColor('#3A98B9')
      setBestColor('#fff')
    }

    // currentScore === bestScore && bestScore !== 0 ? setBestColor('#3A98B9') : setBestColor('#fff')
  }, [currentScore, bestScore])

  return (
    <div className={style.scoreboard} role="presentation">
      <p style={{ color: currentColor }}>Score: {currentScore}</p>
      <p style={{ color: bestColor }}>Best: {bestScore}</p>
    </div>
  )
}

export default Scoreboard
