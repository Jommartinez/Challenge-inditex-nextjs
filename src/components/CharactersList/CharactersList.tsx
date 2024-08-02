import { CharacterCard } from '../CharacterCard/CharacterCard'
import './CharactersList.css'

export const CharactersList = () => {
  const demo = {
    id: 1017100,
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
    isFavorite: false,
  }
  const demo2 = {
    id: 1017100,
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
    isFavorite: true,
  }

  return (
    <section className="characters-list">
      <CharacterCard character={demo} />
      <CharacterCard character={demo2} />
      <CharacterCard character={demo} />
      <CharacterCard character={demo2} />
      <CharacterCard character={demo} />
      <CharacterCard character={demo2} />
      <CharacterCard character={demo} />
      <CharacterCard character={demo} />
      <CharacterCard character={demo2} />
      <CharacterCard character={demo} />
      <CharacterCard character={demo} />
    </section>
  )
}
