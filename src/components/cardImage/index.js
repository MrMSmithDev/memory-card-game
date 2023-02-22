import React from 'react'
import PropTypes from 'prop-types'

import style from './CardImage.module.scss'

const CardImage = (props) => {
  return <img className={style.cardImage} alt="Star Wars Character" src={props.imageSource} />
}

CardImage.propTypes = {
  imageSource: PropTypes.instanceOf(File)
}
