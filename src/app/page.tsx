import { CharactersList, Search } from '@/components'
import '@/styles/Home.css'

export default function HomePage() {
  const favoriteLayout = false
  return (
    <div className="home">
      {favoriteLayout && <h2 className="home__title">Favorites</h2>}
      <Search />
      <CharactersList />
    </div>
  )
}
