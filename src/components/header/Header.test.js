import { appContext } from '@app'
import Header from '@components/app'
import { render, screen, within } from '@testing-library/react'
import React from 'react'

test('Renders site title', () => {
  render(<Header />)
  const titleElement = screen.getByText(/mind training/i)
  expect(titleElement).toBeInTheDocument()
})

test('Renders scoreboard with corresponding scores passed from context', () => {
  const currentScore = 5
  const bestScore = 8
  const context = { currentScore, bestScore }

  render(<Header />, {
    wrapper: ({ children }) => <appContext.Provider value={context}>{children}</appContext.Provider>
  })

  const scoreboardElement = screen.getByRole('presentation')

  // Check the Header component has correctly rendered the scoreboard by
  // reading the scores passed via the context provider
  const currentScoreboardElement = within(scoreboardElement).getByText(/^score: 5/i)
  expect(currentScoreboardElement.text).toBeDefined()

  const bestScoreboardElement = within(scoreboardElement).getByText(/^best: 8/i)
  expect(bestScoreboardElement.text).toBeDefined()
})
