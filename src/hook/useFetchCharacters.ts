import { Character, CharacterFetch } from '@/types'
import { getCharacters } from '@/utils/api'
import { useCallback } from 'react'

export const useFetchCharacters = () => {
  const fetchCharacters = useCallback(async (query: string) => {
    try {
      const response = await getCharacters(query, 50)
      const data: Character[] = response.map((character: CharacterFetch) => {
        return {
          id: character.id,
          name: character.name,
          description: character.description,
          imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          isFavorite: false,
        }
      })
      return data
    } catch (error) {
      console.error('error fetching characters', error)
      return []
    }
  }, [])

  return { fetchCharacters }
}
