import { appContext } from '@app'
import CardGrid from '@components/app'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('CardGrid', () => {
  let characterArr

  beforeEach(() => {
    characterArr = [
      {
        character: 'Jar-Jar Binks',
        identifier: 'jarJarBinks',
        imageUrl: 'www.example.com/JarJarBinks',
        tabIndex: 0
      },
      {
        character: 'Jyn Erso',
        identifier: 'jynErso',
        imageUrl: 'www.example.com/JynErso',
        tabIndex: 0
      },
      {
        character: 'Poe Dameron',
        identifier: 'poeDameron',
        imageUrl: 'www.example.com/poeDameron',
        tabIndex: 0
      }
    ]
  })

  it('renders all card elements when passed a valid character array', () => {
    const context = { characterArr }
    render(<CardGrid />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const JarJarCard = screen.getByText(/Jar-Jar Binks/i)
    expect(JarJarCard).toBeInTheDocument()

    const JynCard = screen.getByText(/Jyn Erso/i)
    expect(JynCard).toBeInTheDocument()

    const poeCard = screen.getByText(/Poe Dameron/i)
    expect(poeCard).toBeInTheDocument()
  })

  it('renders the cards image for a character passed in', () => {
    const context = { characterArr }
    render(<CardGrid />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const cardImageArr = screen.getAllByRole('img')
    cardImageArr.forEach((cardImage) => {
      expect(cardImage.style.backgroundImage).toBe(/www.example.com\W/i)
    })
  })
})
