'use client'

import Link from 'next/link'
import { HeartIcon, Logo } from '..'
import './Header.css'
import { useCharacterContext } from '@/hook'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  const {
    setFavoriteLayout,
    favoriteList,
    favoritesWithFilter,
    charactersWithFilter,
    setFilterName,
  } = useCharacterContext()

  const handleToggleFav = (isFav: boolean) => {
    setFavoriteLayout(isFav)
    setFilterName('')
    if (isFav) {
      favoritesWithFilter('')
    } else {
      charactersWithFilter('')
    }
    router.push('/')
  }

  return (
    <header className="header">
      <Link href="/" className="header__logo" onClick={() => handleToggleFav(false)}>
        <Logo />
      </Link>
      <div className="header__favs" onClick={() => handleToggleFav(true)}>
        <HeartIcon isSelected />
        <span className="header__favs-value">{favoriteList?.length}</span>
      </div>
    </header>
  )
}
