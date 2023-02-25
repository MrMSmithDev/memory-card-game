import { render } from '@testing-library/react'
import React from 'react'

import CardImage from './CardImage'

describe('CardImage', () => {
  test('Renders using the correct url', () => {
    const imageUrl = 'www.example.com/jarJarBinks'

    render(<CardImage imageUrl={imageUrl} />)
    const cardImage = screen.getByRole('img')
    expect(cardImage).toHaveStyle(`background-image: url(${imageUrl})`)
  })
})
