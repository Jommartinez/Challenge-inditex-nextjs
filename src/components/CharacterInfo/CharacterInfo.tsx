'use client'

import Image from 'next/image'
import { HeartIcon } from '..'
import { Character } from '@/types'

import './CharacterInfo.css'
import { useCharacterContext, useFavorite } from '@/hook'
import { useEffect, useState } from 'react'

interface CharacterInfoProps {
  character: Character | null
}

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { toggleFavorite } = useFavorite()
  const { favoriteList } = useCharacterContext()

  useEffect(() => {
    const checkIdExists = favoriteList.some((c) => c.id === character?.id)
    setIsFavorite(checkIdExists)
  }, [character])

  return (
    <section className="character-info">
      <article className="character-info__wrapper">
        <div className="character-info__image-wrapper">
          <Image
            priority
            className="character-info__image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={character?.imageUrl ?? ''}
            alt={character?.name ?? ''}
          />
        </div>
        <div className="character-info__data">
          <div className="character-info__wrapper-title">
            <h1 className="character-info__title">{character?.name}</h1>
            <button onClick={() => toggleFavorite(character!)} className="character-info__button">
              <HeartIcon isSelected={isFavorite} />
            </button>
          </div>
          <p className="character-info__description">{character?.description}</p>
        </div>
      </article>
    </section>
  )
}
