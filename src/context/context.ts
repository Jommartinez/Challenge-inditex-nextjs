import { createContext } from 'react'
import type { CharacterContextProps } from '@/types'

export const characterContext = createContext<CharacterContextProps>({
  charactersList: [],
  favoriteLayout: false,
  favoriteList: [],
  favoriteFilterList: [],
  filterName: '',
  setCharactersList: () => {},
  setFavoriteLayout: () => {},
  setFavoriteList: () => {},
  setFavoriteFilterList: () => {},
  favoritesWithFilter: () => {},
  charactersWithFilter: () => {},
  setFilterName: () => {},
})
