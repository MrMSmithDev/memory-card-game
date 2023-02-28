import { appContext } from '@app'
import Scoreboard from '@components/scoreboard'
import { render, screen } from '@testing-library/react'

describe('Scoreboard', () => {
  it('renders current and best score depending on context', () => {
    const currentScore = 3
    const bestScore = 5
    const context = { currentScore, bestScore }

    render(<Scoreboard />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const currentScoreElement = screen.getByText(/score: 3/i)
    expect(currentScoreElement).toBeInTheDocument()

    const bestScoreElement = screen.getByText(/best: 5/i)
    expect(bestScoreElement).toBeInTheDocument()
  })

  it('renders current score in red when current score set to zero', () => {
    const currentScore = 0
    const bestScore = 5
    const context = { currentScore, bestScore }

    render(<Scoreboard />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const currentScoreElement = screen.getByText(/score: 0/i)
    expect(currentScoreElement.style.color).toBe('#E90064')
  })
})
