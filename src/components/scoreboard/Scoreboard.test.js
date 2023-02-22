import Scoreboard from '@components/scoreboard'
import { render, screen } from '@testing-library/react'

test('renders current score scoreboard', () => {
  render(<Scoreboard />)
  const scoreParagraphElement = screen.getByText(/score: ([0-9]|1[012])/i)
  expect(scoreParagraphElement).toBeInTheDocument()
})

test('renders best score scoreboard', () => {
  render(<Scoreboard />)
  const bestParagraphElement = screen.getByText(/best: ([0-9]|1[012])/i)
  expect(bestParagraphElement).toBeInTheDocument()
})
