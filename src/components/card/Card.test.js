import { appContext } from '@app'
import Card from '@components/app'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {
      character: 'Jar-Jar Binks',
      identifier: 'jarJarBinks',
      imageUrl: 'www.example.com/JarJarBinks',
      tabIndex: 0
    }
  })

  test('Renders a div element with the correct class', () => {
    render(<Card {...props} />)
    const cardElement = screen.getByRole('button')
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).toHaveClass('card')
  })

  test('Renders a div element with the correct title', () => {
    render(<Card {...props} />)
    const cardTitleElement = screen.getByText('Jar-Jar Binks')
    expect(cardTitleElement).toBeInTheDocument()
    expect(cardTitleElement).toHaveClass('cardTitle')
  })

  test('Renders a nested cardImage components with the correct image path', () => {
    render(<Card {...props} />)
    const cardImageElement = screen.getByRole('img')
    expect(cardImageElement).toBeInDocument()
    expect(cardImageElement.imageUrl).toBe('www.example.com/JarJarBinks')
  })

  test('Calls HandleCharacterClick when div is clicked on or if in focus, the enter key is pressed', () => {
    const handleCharacterClick = jest.fn()
    const context = { handleCharacterClick }

    render(<Card {...props} />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const cardElement = screen.getByRole('button')

    // Simulate click
    fireEvent.click(cardElement)
    expect(handleCharacterClick).toHaveBeenCalledWith('jarJarBinks')

    // Simulate keyDown
    fireEvent.keyDown(cardElement, { key: 'Enter' })
    expect(handleCharacterClick).toHaveBeenCalledWith('jarJarBinks')
  })

  test('Component renders with correct prop types', () => {
    expect(Card.propTypes.character).toBeDefined()
    expect(Card.propTypes.identifier).toBeDefined()
    expect(Card.propTypes.imageUrl).toBeDefined()
    expect(Card.propTypes.tabIndex).toBeDefined()
  })
})
