import { appContext } from '@app'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import userEvent from '../../../node_modules/@testing-library/user-event/dist/index'
import Help from './index'

describe('Help', () => {
  let contextValue
  beforeEach(() => {
    contextValue = {
      setIsHelpActive: jest.fn()
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders a title which says "How to play', () => {
    render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const title = screen.getByText(/How to Play/i)
    expect(title).toBeInTheDocument()
  })

  it('renders three information paragraphs', () => {
    render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const infoParagraphs = screen.getAllByRole('contentinfo')
    expect(infoParagraphs).toHaveLength(3)
  })

  it('renders a link to play the game', () => {
    render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const link = screen.getByTestId('play-link')
    expect(link).toBeInTheDocument()
  })

  it('calls handlePlayClick when the link is clicked', () => {
    render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const link = screen.getByTestId('play-link')

    userEvent.click(link)
    expect(contextValue.setIsHelpActive).toHaveBeenCalled()
  })

  it('calls handlePlayClick when the link is highlighted and pressed "Enter" on', () => {
    render(<Help />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const link = screen.getByTestId('play-link')

    userEvent.tab()
    userEvent.type(link, 'keydown', { key: 'Enter' })
    expect(contextValue.setIsHelpActive).toHaveBeenCalled()
  })
})
