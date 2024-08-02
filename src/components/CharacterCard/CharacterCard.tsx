'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon } from '../HeartIcon/HeartIcon'
import { Character } from '@/types/Character'
import './CharacterCard.css'

interface CharacterCardProps {
  character: Character
}
export const CharacterCard = ({ character }: CharacterCardProps) => {
  const handleToggle = (character: Character) => {}

  return (
    <article className="character-card">
      <Link href={`/character/${character?.id}`} className="character-card__photo">
        <Image fill src={character?.imageUrl ?? ''} alt={character?.name} />
      </Link>
      <div className="character-card__info">
        <div className="character-card__line"></div>
        <p className="character-card__title">{character?.name}</p>
        <button
          className="character-card__button"
          onClick={() => {
            handleToggle(character)
          }}
        >
          <HeartIcon isSelected={character?.isFavorite} />
        </button>
      </div>
    </article>
  )
}
