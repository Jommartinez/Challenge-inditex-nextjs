import { Character } from '.'

export interface CharacterContextProps {
  charactersList: Character[]
  favoriteLayout: boolean
  favoriteList: Character[]
  favoriteFilterList: Character[]
  filterName: string
  setCharactersList: (characters: Character[]) => void
  setFavoriteLayout: (layout: boolean) => void
  setFavoriteList: (characters: Character[]) => void
  setFavoriteFilterList: (characters: Character[]) => void
  favoritesWithFilter: (query: string) => void
  charactersWithFilter: (query: string) => void
  setFilterName: (name: string) => void
}
