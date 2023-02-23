import appBackground from '@assets/images/background.jpg'
import CardGrid from '@components/cardGrid/index'
import Footer from '@components/footer'
import Header from '@components/header'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

import style from './App.module.scss'

export const appContext = createContext()

const characterArr = [
  {
    characterName: 'Darth Maul',
    identifier: 'darthMaul',
    imageUrl: 'static/images/characters/darth-maul-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Darth Vader',
    identifier: 'darthVader',
    imageUrl: 'static/images/characters/darth-vader-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Finn FN-2187',
    identifier: 'finnFn2187',
    imageUrl: 'static/images/characters/finn-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Han Solo',
    identifier: 'hanSolo',
    imageUrl: 'static/images/characters/han-solo-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Kylo Ren',
    identifier: 'kyloRen',
    imageUrl: 'static/images/characters/kylo-ren-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Luke Skywalker',
    identifier: 'lukeSkywalker',
    imageUrl: 'static/images/characters/luke-skywalker-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Obi-Wan Kenobi',
    identifier: 'obiWanKenobi',
    imageUrl: 'static/images/characters/obi-wan-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Padme Amidala',
    identifier: 'padme',
    imageUrl: 'static/images/characters/padme-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Emperor Palpatine',
    identifier: 'emperorPalpatine',
    imageUrl: 'static/images/characters/palpatine-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Princess Leia',
    identifier: 'princessLeia',
    imageUrl: 'static/images/characters/princess-leia-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Rey Skywalker',
    identifier: 'reySkywalker',
    imageUrl: 'static/images/characters/rey-card.jpg',
    isChosen: false
  },
  {
    characterName: 'Yoda',
    identifier: 'yoda',
    imageUrl: 'static/images/characters/yoda-card.jpg',
    isChosen: false
  }
]

const AppProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const findCharacterIndex = (charIdentifier) =>
    characterArr.findIndex((character) => character.identifier === charIdentifier)

  const isDuplicateChoice = (charIdentifier) =>
    characterArr[findCharacterIndex(charIdentifier)].isChosen

  const addCharacterClicked = (charIdentifier) =>
    (characterArr[findCharacterIndex(charIdentifier)].isChosen = true)

  const resetCharacterArr = () => {
    characterArr.forEach((character) => {
      character.isChosen = false
    })
  }

  const updateScore = () => {
    setCurrentScore(currentScore + 1)
    if (currentScore >= bestScore) setBestScore(currentScore + 1)
  }

  const handleCharacterClick = (identifier) => {
    if (!isDuplicateChoice(identifier)) {
      addCharacterClicked(identifier)
      updateScore()
    } else {
      resetCharacterArr()
      setCurrentScore(0)
    }
  }

  const contextValue = {
    characterArr,
    currentScore,
    bestScore,

    handleCharacterClick
  }

  return <appContext.Provider value={contextValue}>{children}</appContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

const App = () => {
  return (
    <div className="App">
      <div className={style.appBackground} style={{ backgroundImage: `url(${appBackground})` }}>
        <AppProvider>
          <Header />
          <CardGrid />
          <Footer />
        </AppProvider>
      </div>
    </div>
  )
}

export default App
