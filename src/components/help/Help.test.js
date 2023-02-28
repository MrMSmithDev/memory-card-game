import { appContext } from '@app'
import Help from '@components/helpLink'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Help', () => {
  const setIsHelpActive = jest.fn()

  it('renders a title which says "How to play', () => {
    const context = { setIsHelpActive }

    render(<Help />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const title = screen.getByText(/How to Play/i)
    expect(title).toBeInTheDocument()
  })

  it('renders two information paragraphs', () => {
    const context = { setIsHelpActive }

    render(<Help />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const infoParagraphs = screen.getAllByRole('contentinfo')
    expect(infoParagraphs).toHaveLength(2)
  })

  it('renders a link to play the game', () => {
    const context = { setIsHelpActive }

    render(<Help />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('calls handlePlayClick when the link is clicked', () => {
    const context = { setIsHelpActive }
    const handlePlayClick = jest.fn()

    render(<Help />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const link = screen.getByRole('link')

    fireEvent.click(link)
    expect(handlePlayClick).toHaveBeenCalled()

    fireEvent.keyDown(link, { key: 'Enter' })
    expect(handlePlayClick).toHaveBeenCalled()
  })

  it('calls handlePlayClick when the link is highlighted and pressed "Enter" on', () => {
    const context = { setIsHelpActive }
    const handlePlayClick = jest.fn()

    render(<Help />, {
      wrapper: ({ children }) => (
        <appContext.Provider value={context}>{children}</appContext.Provider>
      )
    })

    const link = screen.getByRole('link')

    fireEvent.keyDown(link, { key: 'Enter' })
    expect(handlePlayClick).toHaveBeenCalled()
  })
})
