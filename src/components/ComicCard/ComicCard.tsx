import { Comic } from '@/types'
import './ComicCard.css'
import Image from 'next/image'

export const ComicCard = ({ title, imageUrl, year }: Comic) => {
  return (
    <article className="comic-card">
      <Image src={imageUrl} alt={title} width={169} height={269} />
      <div className="comic-card__info">
        <h3 className="comic-card__title">{title}</h3>
        <p className="comic-card__year">{year}</p>
      </div>
    </article>
  )
}
