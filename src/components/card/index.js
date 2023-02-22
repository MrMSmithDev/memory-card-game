/* eslint-disable jsx-a11y/no-static-element-interactions */
import CardImage from '@components/cardImage'
import PropTypes from 'prop-types'
import React from 'react'

import style from './Card.module.scss'

const Card = (props) => {
  const handleCardChoice = (e) => {
    console.log(e)
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') handleCardChoice(e)
  }

  return (
    <div
      className={style.card}
      data-character={props.character}
      onClick={handleCardChoice}
      onKeyDown={handleKeyDown}
    >
      <p className={style.cardTitle}>{props.character}</p>
      <CardImage imageUrl={props.imageUrl} />
    </div>
  )
}

Card.propTypes = {
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Card
