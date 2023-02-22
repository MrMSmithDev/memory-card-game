import React from 'react'
import PropTypes from 'prop-types'

import style from './card.module.scss'

const Card = (props) => {
  return <div className={style.card}>{props}</div>
}

Card.propTypes = {
  number: PropTypes.number
}

export default Card
