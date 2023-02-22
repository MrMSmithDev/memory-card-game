import Header from '@components/app'
import { render, screen } from '@testing-library/react'

test('renders learn react link', () => {
  render(<Header />)
  const logoElement = screen.getByText(/mind training/i)
  expect(logoElement).toBeInTheDocument()
})
