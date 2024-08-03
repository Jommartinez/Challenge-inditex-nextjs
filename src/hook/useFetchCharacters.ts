import { Character, CharacterFetch } from '@/types'
import { getCharacterById, getCharacters } from '@/utils/api'
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

  const fetchCharacterById = useCallback(async (id: number) => {
    try {
      const response = await getCharacterById(id)

      if (response && response.length > 0) {
        const data: any = {
          id: response[0]?.id,
          name: response[0]?.name,
          description: response[0].description,
          imageUrl: `${response[0].thumbnail.path}.${response[0].thumbnail.extension}`,
          isFavorite: false,
        }
        return data
      }
    } catch (error) {
      console.error('error fetching character by id', error)
      return null
    }
  }, [])

  return { fetchCharacters, fetchCharacterById }
}
