import { render, screen } from '@testing-library/react'
import React from 'react'

import CardImage from './index'

describe('CardImage', () => {
  let imageUrl

  beforeEach(() => {
    imageUrl = 'www.example.com/jarJarBinks'
  })

  it('renders to match snapshot', () => {
    const { container } = render(<CardImage imageUrl={imageUrl} />)
    expect(container).toMatchSnapshot()
  })

  it('renders using the correct url', () => {
    render(<CardImage imageUrl={imageUrl} />)
    const cardImage = screen.getByRole('img')
    expect(cardImage).toHaveStyle(`background-image: url(${imageUrl})`)
  })
})
