'use client'

import { HeartIcon, Logo } from '..'
import './Header.css'

export const Header = () => {
  const favorite = []

  const handleToggleFav = (isFav: boolean) => {}

  return (
    <header className="header">
      <div className="header__logo" onClick={() => handleToggleFav(false)}>
        <Logo />
      </div>
      <div className="header__favs" onClick={() => handleToggleFav(true)}>
        <HeartIcon isSelected />
        <span className="header__favs-value">{favorite?.length}</span>
      </div>
    </header>
  )
}
