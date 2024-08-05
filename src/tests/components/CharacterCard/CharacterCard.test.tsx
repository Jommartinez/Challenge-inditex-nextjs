import { render, screen } from '@testing-library/react'
import { CharacterCard } from '@/components'
import { Character } from '@/types'

describe('test CharacterCard component', () => {
  const character: Character = {
    id: 1,
    name: 'Spider',
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    isFavorite: false,
    description: 'The Amazing Spider',
  }

  test('renders the character name in a p', () => {
    render(<CharacterCard character={character} />)
    const characterName = screen.getByText(character.name)
    expect(characterName).toBeTruthy()
  })

  test('renders the character image', () => {
    render(<CharacterCard character={character} />)

    const img = screen.getByRole('img')
    const srcAttribute = img.getAttribute('src')

    expect(srcAttribute).toContain(encodeURIComponent(character.imageUrl!))
    expect(img).toHaveAttribute('alt', character.name)
  })
})
