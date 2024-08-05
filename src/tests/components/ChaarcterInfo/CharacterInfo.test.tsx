import { render, screen } from '@testing-library/react'

import { CharacterInfo } from '@/components'
import { Character } from '@/types'

describe('test InfoCharacter component', () => {
  const character: Character = {
    id: 1,
    name: 'Adam warlock',
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    isFavorite: false,
    description:
      'Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe.',
  }

  test('should render the character name', () => {
    render(<CharacterInfo character={character} />)
    const characterName = screen.getByText(character.name)
    expect(characterName).toBeInTheDocument()
  })

  test('should render the character image', () => {
    render(<CharacterInfo character={character} />)

    const img = screen.getByRole('img')
    const srcAttribute = img.getAttribute('src')
    const altAttribute = img.getAttribute('alt')

    expect(srcAttribute).toContain(encodeURIComponent(character.imageUrl!))
    expect(altAttribute).toContain(character.name)
  })

  test('should render the hero description', () => {
    render(<CharacterInfo character={character} />)
    const description = screen.getByText(character.description || '')
    expect(description).toBeInTheDocument()
  })
})
