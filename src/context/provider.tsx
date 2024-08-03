'use client'

import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Character } from '@/types'
import { useFetchCharacters } from '@/hook'
import { characterContext } from './context'

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [charactersList, setCharactersList] = useState<Character[]>([])
  const [favoriteLayout, setFavoriteLayout] = useState<boolean>(false)
  const [favoriteList, setFavoriteList] = useState<Character[]>([])
  const [favoriteFilterList, setFavoriteFilterList] = useState<Character[]>([])
  const [filterName, setFilterName] = useState<string>('')

  const { fetchCharacters } = useFetchCharacters()

  const fetchCharactersData = async () => {
    const characters = await fetchCharacters('')
    setCharactersList(characters)
  }

  useEffect(() => {
    fetchCharactersData()
  }, [fetchCharacters])

  const favoritesWithFilter = useCallback(
    (query: string) => {
      if (query === '') {
        setFavoriteFilterList(favoriteList)
        return
      } else {
        const filteredList = favoriteList.filter((character) => {
          return character.name.toLowerCase().includes(query.toLowerCase())
        })
        setFavoriteFilterList(filteredList)
      }
    },
    [favoriteList],
  )

  const charactersWithFilter = useCallback(
    (query: string) => {
      const loadCharacters = async () => {
        const characterData = await fetchCharacters(query)
        setCharactersList(characterData)
      }

      loadCharacters()
    },
    [fetchCharacters, setCharactersList],
  )

  const value = {
    charactersList,
    favoriteLayout,
    favoriteList,
    favoriteFilterList,
    filterName,
    favoritesWithFilter,
    setCharactersList,
    setFavoriteLayout,
    setFavoriteList,
    setFavoriteFilterList,
    charactersWithFilter,
    setFilterName,
  }

  return <characterContext.Provider value={value}>{children}</characterContext.Provider>
}
