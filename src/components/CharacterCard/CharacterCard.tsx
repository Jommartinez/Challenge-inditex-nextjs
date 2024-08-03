'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon } from '../HeartIcon/HeartIcon'
import { Character } from '@/types/Character'
import './CharacterCard.css'
import { useFavorite } from '@/hook'

interface CharacterCardProps {
  character: Character
}
export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { toggleFavorite } = useFavorite()

  return (
    <article className="character-card">
      <Link href={`/character/${character?.id}`} className="character-card__photo">
        <Image
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          src={character?.imageUrl ?? ''}
          alt={character?.name}
        />
      </Link>
      <div className="character-card__info">
        <div className="character-card__line"></div>
        <p className="character-card__title">{character?.name}</p>
        <button
          className="character-card__button"
          onClick={() => {
            toggleFavorite(character)
          }}
        >
          <HeartIcon isSelected={character?.isFavorite} />
        </button>
      </div>
    </article>
  )
}
