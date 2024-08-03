'use client'

import { CharacterInfo, ComicsList, Loading } from '@/components'
import { useFetchCharacters } from '@/hook'
import { Character } from '@/types'
import { useEffect, useState } from 'react'

interface Props {
  params: { id: string }
}

export default function CharacterPage({ params }: Props) {
  const [character, setCharacter] = useState<Character | null>(null)
  const { fetchCharacterById } = useFetchCharacters()

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const fetchedCharacter = await fetchCharacterById(Number(params.id))
        setCharacter(fetchedCharacter)
      } catch (error) {
        console.error('Error fetching character:', error)
      }
    }
    if (params.id) fetchCharacter()
  }, [params.id, character])

  return (
    <div>
      {character ? (
        <>
          <CharacterInfo character={character} />
          <ComicsList characterId={params.id} />
        </>
      ) : (
        <Loading text="Loading character..." />
      )}
    </div>
  )
}
