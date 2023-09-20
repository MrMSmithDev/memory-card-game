import { appContext } from '@app'
import React, { useContext } from 'react'

import style from './VictoryScreen.module.scss'

const VictoryScreen = () => {
  const { resetGame } = useContext(appContext)

  const handleResetGame = () => {
    resetGame()
  }

  // Keydown event for accessibility
  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      resetGame()
    }
  }

  return (
    <div className={style.victoryOverlay}>
      <div className={style.victoryScreen} onClick={handleResetGame} onKeyDown={handleKeyDown}>
        <p className={style.victoryTitle}>Congratulations!</p>
        <p className={style.victoryPara}>You have successfully found all twelve characters</p>
        <button className={style.resetBtn} onClick={handleResetGame} onKeyDown={handleKeyDown}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default VictoryScreen
