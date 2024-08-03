import { Character } from '@/types'
import { useCharacterContext } from '.'

export const useFavorite = () => {
  const {
    charactersList,
    favoriteList,
    setFavoriteList,
    setCharactersList,
    setFavoriteFilterList,
  } = useCharacterContext()

  const toggleFavorite = (character: Character) => {
    let newList: Character[] = []
    const existInFavorite = favoriteList.some(
      (characterFav: Character) => characterFav.id === character.id,
    )

    if (existInFavorite) {
      character.isFavorite = false
      newList = favoriteList.filter((characterFav: Character) => characterFav.id !== character.id)
      setFavoriteList(newList)
      setFavoriteFilterList(newList)
    } else {
      character.isFavorite = true
      const newFavoriteCharacter = { ...character, isFavorite: true }
      newList = [...favoriteList, newFavoriteCharacter]
      setFavoriteList(newList)
      setFavoriteFilterList(newList)
    }

    const newCharactersList = charactersList.map((characterItem: Character) => {
      if (characterItem.id === character.id) {
        return character
      } else {
        return characterItem
      }
    })
    setCharactersList(newCharactersList)
  }

  return { toggleFavorite }
}
