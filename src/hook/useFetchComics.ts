import { Comic, ComicsFetch } from '@/types'
import { getComics } from '@/utils/api'
import { useCallback } from 'react'

export const useFetchComics = () => {
  const fetchComics = useCallback(async (id: number) => {
    try {
      const response = await getComics(id)
      const data: Comic[] = response.map((comic: ComicsFetch) => {
        return {
          id: comic.id,
          title: comic.title,
          year: new Date(comic.dates[0].date).getFullYear().toString(),
          imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        }
      })
      return data
    } catch (error) {
      console.error('error fetching comics', error)
      return []
    }
  }, [])

  return { fetchComics }
}
