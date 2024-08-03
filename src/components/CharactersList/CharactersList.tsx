'use client'

import { useCharacterContext } from '@/hook'
import { CharacterCard } from '../CharacterCard/CharacterCard'
import './CharactersList.css'
import { useEffect, useState } from 'react'
import { Character } from '@/types'
import { Loading } from '../Loading/Loading'

export const CharactersList = () => {
  const [listCharacters, setListCharacters] = useState<Character[]>([])

  const { charactersList, favoriteList, favoriteLayout, favoriteFilterList } = useCharacterContext()

  useEffect(() => {
    if (favoriteLayout) {
      setListCharacters(favoriteFilterList)
    } else {
      const newData: Character[] = charactersList.map((character: Character) => {
        return {
          ...character,
          isFavorite: favoriteList.some((fav: Character) => fav.id === character.id),
        }
      })
      setListCharacters(newData)
    }
  }, [charactersList, favoriteList, favoriteLayout, favoriteFilterList])

  return (
    <>
      {listCharacters.length === 0 && !favoriteLayout ? (
        <Loading text="Loading characters..." />
      ) : (
        <section className="characters-list">
          {listCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </section>
      )}
    </>
  )
}
