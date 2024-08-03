'use client'

import { CharactersList, Search } from '@/components'
import { useCharacterContext } from '@/hook'
import '@/styles/Home.css'

export default function HomePage() {
  const { favoriteLayout } = useCharacterContext()
  return (
    <div className="home">
      {favoriteLayout && <h2 className="home__title">Favorites</h2>}
      <Search />
      <CharactersList />
    </div>
  )
}
