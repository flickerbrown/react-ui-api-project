import Modal from "react-modal"

Modal.setAppElement("#root")

const CharacterModal = ({ character, isOpen, onRequestClose }) => {
  if (!character) return null
  console.log(character)
  //if any of the character inputs is empty, return "unknown"

  if (character.house === "") {
    character.house = "unknown"
  }
  if (character.dateOfBirth === "" || character.dateOfBirth === undefined || character.dateOfBirth === null) {
    character.dateOfBirth = "unknown"
  }
  if (character.ancestry === "") {
    character.ancestry = "unknown"
  }
  if (character.eyeColour === "") {
    character.eyeColour = "unknown"
  }
  if (character.hairColour === "") {
    character.hairColour = "unknown"
  }
  if (character.patronus === "") {
    character.patronus = "unknown"
  }
  if (character.actor === "") {
    character.actor = "unknown"
  }
  if (character.wizard ) {
    character.wizard = "Yes"
  } else {
    character.wizard = "No"
  }

  
  return (
    <Modal className={"modal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Modal"
    >
      <div className="modal-content">
        <h2 className="modal-title">{character.name}</h2>
        <img className="modal-image" src={character.image} alt={character.name} />
        <div>
          <p className="modal-description"><span>House: </span> {character.house}</p>
          <p className="modal-description"><span>D.O.B: </span>  {character.dateOfBirth}</p>
          <p className="modal-description"><span>Ancestry: </span>  {character.ancestry}</p>
          <p className="modal-description"><span>Gender: </span>  {character.gender}</p>
          <p className="modal-description"><span>Wizard: </span>  {character.wizard}</p>
          <p className="modal-description"><span>Patrounus: </span>  {character.patronus}</p>
          <p className="modal-description"><span>Actor: </span>  {character.actor}</p>
        </div>
        <button className="modal-close" onClick={onRequestClose}>X</button>
      </div>
    </Modal>
  )
}

export default CharacterModal

