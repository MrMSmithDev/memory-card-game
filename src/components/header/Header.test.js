import { appContext } from '@app'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from './index'

describe('Header', () => {
  let context

  beforeEach(() => {
    context = {
      currentScore: 5,
      bestScore: 8,

      isHelpActive: () => {},
      setIsHelpActive: () => {}
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Header />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={context}>{children}</appContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders site title', () => {
    render(<Header />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={context}>{children}</appContext.Provider>
        </HashRouter>
      )
    })
    const titleElement = screen.getByText(/mind training/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders scoreboard with corresponding scores passed from context', () => {
    render(<Header />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={context}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    // Check the Header component has correctly rendered the scoreboard by
    // reading the scores passed via the context provider
    const currentScoreboardElement = screen.getByText(/^score: 5/i)
    expect(currentScoreboardElement).toBeInTheDocument()

    const bestScoreboardElement = screen.getByText(/^best: 8/i)
    expect(bestScoreboardElement).toBeInTheDocument()
  })
})
