import { appContext } from '@app'
import Card from '@components/card'
import React, { useContext } from 'react'

import VictoryScreen from '../victoryScreen/index'
import style from './CardGrid.module.scss'

const createRandomIndexes = (arrLength) => {
  // Create array from 0 - 11, to indicate indexes of characters
  const array = Array.from({ length: arrLength }, (_, i) => i)

  for (let i = array.length - 1; i > 0; i -= 1) {
    // Choose a random index to swap the current index with
    const newI = Math.floor(Math.random() * (i + 1))

    // Swap the two values over. Semi-colon separates it from the
    // initialization in the previous expression
    ;[array[i], array[newI]] = [array[newI], array[i]]
  }
  return array
}

const CardGrid = () => {
  const { characterArr, isVictorious } = useContext(appContext)

  const createCardSet = (indexArray) => {
    return indexArray.map((randomIndex) => (
      <Card
        character={characterArr[randomIndex].characterName}
        identifier={characterArr[randomIndex].identifier}
        imageUrl={characterArr[randomIndex].imageUrl}
        key={characterArr[randomIndex].identifier}
        tabIndex={indexArray.findIndex((number) => number === randomIndex) + 1}
      />
    ))
  }

  const cardSet = createCardSet(createRandomIndexes(characterArr.length))

  return (
    <React.Fragment>
      <div className={style.cardGrid}>{cardSet}</div>
      {isVictorious ? <VictoryScreen /> : null}
    </React.Fragment>
  )
}

export default CardGrid
