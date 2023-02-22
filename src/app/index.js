import CardGrid from '@components/cardGrid'
import Footer from '@components/footer'
import Header from '@components/header'
import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

import style from './App.module.scss'

export const appContext = createContext()

const AppProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const characterArr = [
    {
      characterName: 'Darth Maul',
      identifier: 'darthMaul',
      imageUrl: '~@assets/images/characters/darth-maul-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Darth Vader',
      identifier: 'darthVader',
      imageUrl: '~@assets/images/characters/darth-vader-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Finn FN-2187',
      identifier: 'finnFn2187',
      imageUrl: '~@assets/images/characters/finn-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Han Solo',
      identifier: 'hanSolo',
      imageUrl: '~@assets/images/characters/han-solo-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Kylo Ren',
      identifier: 'kyloRen',
      imageUrl: '~@assets/images/characters/kylo-ren-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Luke Skywalker',
      identifier: 'lukeSkywalker',
      imageUrl: '~@assets/images/characters/luke-skywalker-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Obi-Wan Kenobi',
      identifier: 'obiWanKenobi',
      imageUrl: '~@assets/images/characters/obi-wan-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Padme Amidala',
      identifier: 'padme',
      imageUrl: '~@assets/images/characters/padme-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Emperor Palpatine',
      identifier: 'emperorPalpatine',
      imageUrl: '~@assets/images/characters/palpatine-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Princess Leia',
      identifier: 'princessLeia',
      imageUrl: '~@assets/images/characters/princess-leia-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Rey Skywalker',
      identifier: 'reySkywalker',
      imageUrl: '~@assets/images/characters/rey-card.jpg',
      isChosen: false
    },
    {
      characterName: 'Yoda',
      identifier: 'yoda',
      imageUrl: '~@assets/images/characters/yoda-card.jpg',
      isChosen: false
    }
  ]

  const findCharacterIndex = (identifier) =>
    characterArr.indexOf((characterObj) => characterObj.name === identifier)

  const isDuplicateChoice = (identifier) => characterArr[findCharacterIndex(identifier)].isChosen

  const addCharacterClicked = (identifier) =>
    (characterArr[findCharacterIndex(identifier)].isChosen = true)

  const resetCharacterArr = () => {
    characterArr.forEach((character) => {
      character.isChosen = false
    })
  }

  const updateScore = () => {
    if (!isDuplicateChoice) {
      setCurrentScore(currentScore + 1)
      // Update the bestScore to match the currentScore
      // if currentScore is a greater value
      if (currentScore > bestScore) setBestScore(currentScore)
    } else {
      setCurrentScore(0)
    }
  }

  const handleCharacterClick = (identifier) => {
    if (!isDuplicateChoice(identifier)) {
      addCharacterClicked(identifier)
      updateScore()
    } else {
      resetCharacterArr()
      setCurrentScore(0)
    }
    // Shuffle card function
  }

  console.log(handleCharacterClick)

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
      <div className={style.appBackground}>
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
