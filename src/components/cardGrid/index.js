import { appContext } from '@app'
import Card from '@components/card'
import React, { useContext } from 'react'

import style from './CardGrid.module.scss'

const CardGrid = () => {
  const { characterArr } = useContext(appContext)

  const createCardSet = (arr) =>
    arr.map((character) => (
      <Card
        character={character.characterName}
        imageUrl={character.imageUrl}
        key={character.identifier}
      />
    ))

  const cardSet = createCardSet(characterArr)

  return <div className={style.cardGrid}>{cardSet}</div>
}

export default CardGrid
