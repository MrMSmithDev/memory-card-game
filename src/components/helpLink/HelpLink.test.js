import { appContext } from '@app'
import HelpLink from '@components/helpLink'
import { fireEvent, render, screen } from '@testing-library/react'

describe('HelpLink', () => {
  let isHelpActive

  beforeEach(() => {
    isHelpActive = false
  })

  it('renders an svg icon link', () => {
    const context = { isHelpActive }

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const icon = screen.getByRole('link')
    expect(icon).toBeInTheDocument()
  })

  it('calls handleLinkClick when clicked', () => {
    const context = { isHelpActive }
    const handleLinkClick = jest.fn()

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const link = screen.getByRole('link')
    fireEvent.click(link)
    expect(handleLinkClick).toHaveBeenCalled()
  })

  it('calls handleLinkClick or key downed with Enter key', () => {
    const context = { isHelpActive }
    const handleLinkClick = jest.fn()

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const link = screen.getByRole('link')
    fireEvent.keyDown(link, { key: 'Enter' })
    expect(handleLinkClick).toHaveBeenCalled()
  })

  it('adds box-shadow when isHelpActive becomes true', () => {
    isHelpActive = true
    const context = { isHelpActive }

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <appContext.provider value={context}>{children}</appContext.provider>
      )
    })

    const link = screen.getByRole('link')
    expect(link).toHaveStyle({ boxShadow: '0 0 30px 20px $hover-color' })
  })
})
