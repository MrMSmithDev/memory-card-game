import Footer from '@components/app'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Footer', () => {
  test('Renders footer link with correct class', () => {
    render(<Footer />)
    const footerLink = screen.getByRole('contentinfo')
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toHaveClass('container')
  })

  test('Renders link to github with correct icon and href', () => {
    render(<Footer />)

    const gitHubLinkElement = screen.getByText(/MBright90/i)
    expect(gitHubLinkElement).toBeInTheDocument()
    expect(gitHubLinkElement).toHaveAttribute(
      'href',
      'https://github.com/MBright90/memory-card-game'
    )

    const gitHubIconElement = screen.getByRole('img')
    expect(gitHubIconElement).toBeInTheDocument()
    expect(gitHubIconElement).toHaveAttribute('data-icon', 'github')
  })
})
