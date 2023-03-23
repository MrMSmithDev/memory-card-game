import { appContext } from '@app'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import HelpLink from './index'

describe('HelpLink', () => {
  let contextValue

  beforeEach(() => {
    contextValue = {
      isHelpActive: false
    }
  })

  it('renders to match snapshot', () => {
    const { container } = render(<HelpLink />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })
    expect(container).toMatchSnapshot()
  })

  it('renders an svg icon link', () => {
    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const icon = screen.getByTestId('help-link')
    expect(icon).toBeInTheDocument()
  })

  it('calls handleLinkClick when clicked', () => {
    const setIsHelpActive = jest.fn()
    contextValue = { ...contextValue, setIsHelpActive }

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const link = screen.getByTestId('help-link')
    userEvent.click(link)
    expect(setIsHelpActive).toHaveBeenCalled()
  })

  it('calls handleLinkClick or key downed with Enter key', () => {
    const setIsHelpActive = jest.fn()
    contextValue = { ...contextValue, setIsHelpActive }

    render(<HelpLink />, {
      wrapper: ({ children }) => (
        <HashRouter basename="/">
          <appContext.Provider value={contextValue}>{children}</appContext.Provider>
        </HashRouter>
      )
    })

    const link = screen.getByTestId('help-link')
    userEvent.tab()
    userEvent.type(link, '{keydown}', { key: 'Enter' })
    expect(setIsHelpActive).toHaveBeenCalled()
  })
})
