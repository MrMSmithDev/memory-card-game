import { render, screen } from '@testing-library/react'
import React from 'react'

import Footer from './index'

describe('Footer', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })

  it('renders link to github with correct href', () => {
    render(<Footer />)

    const gitHubLinkElement = screen.getByText(/MrMSmithDev/i)
    expect(gitHubLinkElement).toBeInTheDocument()
    expect(gitHubLinkElement).toHaveAttribute(
      'href',
      'https://github.com/MrMSmithDev/memory-card-game'
    )
  })
})
