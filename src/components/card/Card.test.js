import { appContext } from '@app'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Card from './index'

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

  it('renders to match snapshot', () => {
    const context = { handleCharacterClick: () => {} }
    const { container } = render(<Card {...props} />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('calls HandleCharacterClick when div is clicked on or if in focus, the enter key is pressed', () => {
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

  it('renders with correct prop types', () => {
    expect(Card.propTypes.character).toBeDefined()
    expect(Card.propTypes.identifier).toBeDefined()
    expect(Card.propTypes.imageUrl).toBeDefined()
    expect(Card.propTypes.tabIndex).toBeDefined()
  })
})
