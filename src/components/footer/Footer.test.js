import Footer from '@components/app'
import { render, screen } from '@testing-library/react'
import React from 'react'

test('Renders footer link with correct text', () => {
  render(<Footer />)
  const footerLink = screen.getByText(/mBright90/i)
  expect(footerLink).toBeInTheDocument()
  expect(footerLink.href).toBe('https://github.com/MBright90/memory-card-game')
})
