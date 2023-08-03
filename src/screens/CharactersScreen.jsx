import { useState, useEffect } from "react"
import { getCharacters } from "../services/hpCharacters"
import CharactersComponents from "../components/CharactersComponent"
import CharacterModal from "./CharacterModal"

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    fetchCharacters()
  }, [])

  async function fetchCharacters (){
    const allCharacters = await getCharacters()
    setCharacters(allCharacters)
  }

  function openModal(character) {
    setSelectedCharacter(character)
  }

  function closeModal() {
    setSelectedCharacter(null)
  }

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div className="harry-potter-characters">
        {characters.map((character) => (
          <CharactersComponents
            character={character}
            key={character.id}
            onClick={ character.image ? () => openModal(character) : null}
          />
        ))}
      </div>
      <CharacterModal
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onRequestClose={closeModal}
      />
    </div>
  )
}
