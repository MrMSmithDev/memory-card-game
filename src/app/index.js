import appBackground from '@assets/images/background.jpg'
import images from '@characters'
import RouteSwitch from '@routes/RouteSwitch'
import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'

import style from './App.module.scss'

export const appContext = createContext()

const AppProvider = ({ children }) => {
  const [characterArr, setCharacterArr] = useState([
    {
      characterName: 'Darth Maul',
      identifier: 'darthMaul',
      imageUrl: images.darthMaul,
      isChosen: false
    },
    {
      characterName: 'Darth Vader',
      identifier: 'darthVader',
      imageUrl: images.darthVader,
      isChosen: false
    },
    {
      characterName: 'Finn FN-2187',
      identifier: 'finnFn2187',
      imageUrl: images.finn,
      isChosen: false
    },
    {
      characterName: 'Han Solo',
      identifier: 'hanSolo',
      imageUrl: images.hanSolo,
      isChosen: false
    },
    {
      characterName: 'Kylo Ren',
      identifier: 'kyloRen',
      imageUrl: images.kyloRen,
      isChosen: false
    },
    {
      characterName: 'Luke Skywalker',
      identifier: 'lukeSkywalker',
      imageUrl: images.lukeSkywalker,
      isChosen: false
    },
    {
      characterName: 'Obi-Wan Kenobi',
      identifier: 'obiWanKenobi',
      imageUrl: images.obiWan,
      isChosen: false
    },
    {
      characterName: 'Padme Amidala',
      identifier: 'padme',
      imageUrl: images.padme,
      isChosen: false
    },
    {
      characterName: 'Emperor Palpatine',
      identifier: 'emperorPalpatine',
      imageUrl: images.palpatine,
      isChosen: false
    },
    {
      characterName: 'Princess Leia',
      identifier: 'princessLeia',
      imageUrl: images.princessLeia,
      isChosen: false
    },
    {
      characterName: 'Rey Skywalker',
      identifier: 'reySkywalker',
      imageUrl: images.rey,
      isChosen: false
    },
    {
      characterName: 'Yoda',
      identifier: 'yoda',
      imageUrl: images.yoda,
      isChosen: false
    }
  ])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isHelpActive, setIsHelpActive] = useState(false)

  const [isVictorious, setIsVictorious] = useState(false)

  useEffect(() => {
    if (currentScore >= 12) setIsVictorious(true)
  }, [currentScore])

  const findCharacterIndex = (charIdentifier) =>
    characterArr.findIndex((character) => character.identifier === charIdentifier)

  const isDuplicateChoice = (charIdentifier) =>
    characterArr[findCharacterIndex(charIdentifier)].isChosen

  const addCharacterClicked = (charIdentifier) => {
    characterArr[findCharacterIndex(charIdentifier)].isChosen = true
    setCharacterArr([...characterArr])
  }

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

  const resetGame = () => {
    resetCharacterArr()
    setCurrentScore(0)
    setIsVictorious(false)
  }

  const contextValue = {
    characterArr,
    currentScore,
    bestScore,

    isHelpActive,
    isVictorious,
    setIsHelpActive,

    handleCharacterClick,
    resetGame
  }

  return <appContext.Provider value={contextValue}>{children}</appContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.object.isRequired
}

const App = () => {
  return (
    <div className="App">
      <div className={style.appBackground} style={{ backgroundImage: `url(${appBackground})` }}>
        <AppProvider>
          <RouteSwitch />
        </AppProvider>
      </div>
    </div>
  )
}

export default App
