import { appContext } from '@app'
import CardImage from '@components/cardImage'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import style from './Card.module.scss'

const Card = (props) => {
  const { handleCharacterClick } = useContext(appContext)

  const handleCardChoice = (e) => {
    handleCharacterClick(e.target.dataset.identifier)
  }

  // Keydown event for accessibility
  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      e.target.blur()
      handleCardChoice(e)
    }
  }

  return (
    <div
      className={style.card}
      data-identifier={props.identifier}
      onClick={handleCardChoice}
      onKeyDown={handleKeyDown}
      tabIndex={props.tabIndex}
      role={'button'}
    >
      <p className={style.cardTitle}>{props.character}</p>
      <CardImage imageUrl={props.imageUrl} />
    </div>
  )
}

Card.propTypes = {
  character: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired
}

export default Card
