'use client'

import Image from 'next/image'
import icon from '@/assets/search-icon.svg'
import './Search.css'
import { useCharacterContext } from '@/hook'

export const Search = () => {
  const {
    charactersList,
    favoriteLayout,
    favoriteList,
    filterName,
    setFilterName,
    favoritesWithFilter,
    charactersWithFilter,
  } = useCharacterContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueSearch = e.target.value
    setFilterName(valueSearch)

    if (favoriteLayout) {
      favoritesWithFilter(valueSearch)
    } else {
      charactersWithFilter(valueSearch)
    }
  }
  return (
    <section className="search">
      <div className="search__container">
        <label id="search" htmlFor="search">
          <Image src={icon} alt="search" width={12} height={12} priority={false} />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="search__input"
          placeholder="Search a character..."
          onChange={handleChange}
          value={filterName}
        />
      </div>
      <div className="search__result">
        {favoriteLayout ? favoriteList.length : charactersList.length} RESULTS
      </div>
    </section>
  )
}
