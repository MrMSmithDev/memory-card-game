import { appContext } from '@app'
import { render, screen } from '@testing-library/react'
import React from 'react'

import Scoreboard from './index'

describe('Scoreboard', () => {
  let contextValue

  beforeEach(() => {
    contextValue = {
      currentScore: 3,
      bestScore: 5
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<Scoreboard />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={contextValue}>{children}</appContext.Provider>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders current and best score depending on context', () => {
    render(<Scoreboard />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={contextValue}>{children}</appContext.Provider>
      )
    })

    const currentScoreElement = screen.getByText(/score: 3/i)
    expect(currentScoreElement).toBeInTheDocument()

    const bestScoreElement = screen.getByText(/best: 5/i)
    expect(bestScoreElement).toBeInTheDocument()
  })
})
