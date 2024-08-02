import { ComicCard } from '..'
import './ComicsList.css'

interface ComicsListProps {
  characterId: string
}

export const ComicsList = ({ characterId }: ComicsListProps) => {
  const comic = {
    id: 1,
    title: 'Comic title',
    year: '2024',
    imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg',
  }
  return (
    <section className="comics-list">
      <h2 className="comics-list__title">Comics</h2>
      <div className="comics-list__carousel">
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
        <ComicCard id={comic.id} title={comic.title} imageUrl={comic.imageUrl} year={comic.year} />
      </div>
    </section>
  )
}
