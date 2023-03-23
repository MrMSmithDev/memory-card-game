import { appContext } from '@app'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import style from './Help.module.scss'

const Help = () => {
  const { setIsHelpActive } = useContext(appContext)

  const handlePlayClick = () => {
    setIsHelpActive(false)
  }

  return (
    <div className={style.container}>
      <h1 className={style.helpTitle}>How to Play</h1>
      <p className={style.infoPara} role="contentinfo">
        You will see <span className={style.emphasized}>twelve</span> character cards. You must
        choose one of the cards. Try to remember which card you chose, as each time you choose a
        card, the cards will be shuffled into a random order. Choose another character card that is
        different from the one you chose before. You{' '}
        <span className={style.emphasized}>cannot</span> choose the same card twice.
      </p>
      <p className={style.infoPara} role="contentinfo">
        Repeat these steps until you have chosen all 12 character cards without repeating any
        choices. If the you successfully choose all 12 different cards without making any duplicate
        choices, you win the game. If you make a duplicate choice, your score is reset to zero and
        you must start again from the beginning.
      </p>
      <p className={style.infoPara} role="contentinfo">
        Most importantly...
        <span className={style.emphasized}>Have fun!</span>
      </p>
      <div
        className={style.playButton}
        onClick={handlePlayClick}
        onKeyDown={handlePlayClick}
        role="link"
        tabIndex="-3"
        data-testid="play-link"
      >
        <Link to="/">Play</Link>
      </div>
    </div>
  )
}

export default Help
