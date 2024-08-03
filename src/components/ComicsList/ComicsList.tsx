'use client'

import { useEffect, useState } from 'react'
import { ComicCard, Loading } from '..'

import type { Comic } from '@/types'

import './ComicsList.css'
import { useFetchComics } from '@/hook'

interface ComicsListProps {
  characterId: string
}

export const ComicsList = ({ characterId }: ComicsListProps) => {
  const [comics, setComics] = useState<Comic[]>([])

  const { fetchComics } = useFetchComics()

  useEffect(() => {
    const fetchComicsData = async () => {
      const data = await fetchComics(parseInt(characterId))
      setComics(data)
    }
    fetchComicsData()
  }, [characterId])

  return (
    <section className="comics-list">
      <h2 className="comics-list__title">Comics</h2>
      <div className="comics-list__carousel">
        {comics && comics?.length > 0 ? (
          comics?.map((comic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              imageUrl={comic.imageUrl}
              year={comic.year}
            />
          ))
        ) : (
          <Loading text="Loading comics..." />
        )}
      </div>
    </section>
  )
}
