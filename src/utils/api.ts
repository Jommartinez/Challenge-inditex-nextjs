import { CharacterFetch, ComicsFetch } from '@/types/CharactersFetch'

const url = (slug: string) =>
  `https://gateway.marvel.com/v1/public/${slug}?ts=1&apikey=f7e97c0718d1ae5ed46c523cd3314df5&hash=290f7e964b07ee431f314d276c8d429b`

export const getCharacters = (name: string, limit: number) => {
  const api = url('characters')
  const query = name ? `&nameStartsWith=${name}` : ''

  return fetch(`${api}${query}&limit=${limit}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res?.data?.results as CharacterFetch[])
}

export const getCharacterById = (id: number) => {
  const api = url(`characters/${id}`)

  return fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res?.data?.results as any[])
}

export const getComics = (id: number) => {
  const api = url(`characters/${id}/comics`)
  const query = `&limit=20&orderBy=onsaleDate`

  return fetch(`${api}${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res?.data?.results as ComicsFetch[])
}
