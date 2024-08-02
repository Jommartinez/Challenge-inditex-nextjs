'use client'

import Image from 'next/image'
import { HeartIcon } from '..'
import { Character } from '@/types'

import './CharacterInfo.css'

interface CharacterInfoProps {
  character: Character
}

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  const toggleFav = (character: Character) => {}
  return (
    <section className="character-info">
      <article className="character-info__wrapper">
        <div className="character-info__image-wrapper">
          <Image
            className="character-info__image"
            fill
            src={character?.imageUrl ?? ''}
            alt={character?.name}
          />
        </div>
        <div className="character-info__data">
          <div className="character-info__wrapper-title">
            <h1 className="character-info__title">{character?.name}</h1>
            <button onClick={() => toggleFav(character)} className="character-info__button">
              <HeartIcon isSelected={character?.isFavorite} />
            </button>
          </div>
          <p className="character-info__description">{character?.description}</p>
        </div>
      </article>
    </section>
  )
}
