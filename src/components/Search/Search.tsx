'use client'

import Image from 'next/image'
import icon from '@/assets/search-icon.svg'
import './Search.css'

export const Search = () => {
  const favoriteLayout = false
  const favoriteFilter = []
  const charactersList = []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
  return (
    <section className="search">
      <div className="search__container">
        <label htmlFor="search">
          <Image src={icon} alt="search" width={12} height={12} priority={false} />
        </label>
        <input
          type="text"
          className="search__input"
          placeholder="Search a character..."
          onChange={handleChange}
        />
      </div>
      <div className="search__result">
        {favoriteLayout ? favoriteFilter.length : charactersList.length} RESULTS
      </div>
    </section>
  )
}
