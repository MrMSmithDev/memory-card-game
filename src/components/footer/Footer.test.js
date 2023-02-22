import { render, screen } from '@testing-library/react'

import Footer from './index'

test('renders learn react link', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/MBright90/i)
  expect(linkElement).toBeInTheDocument()
})
