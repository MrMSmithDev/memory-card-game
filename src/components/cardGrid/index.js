import React from 'react'
import Card from '@components/card'
import style from './CardGrid.module.style'

const cardGrid = () => {
  const characterArray = [1, 2, 3]
  const createCards = (arr) => arr.Map((card) => <Card number={card} />)

  const cardSet = createCards(characterArray)

  return <div className={style.cardGrid}>{cardSet}</div>
}

export default cardGrid
