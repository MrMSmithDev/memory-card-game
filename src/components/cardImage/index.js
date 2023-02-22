import PropTypes from 'prop-types'
import React from 'react'

import style from './CardImage.module.scss'

const CardImage = (props) => {
  return <div className={style.cardImage} style={{ backgroundImage: `url(${props.imageUrl})` }} />
}

CardImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default CardImage
