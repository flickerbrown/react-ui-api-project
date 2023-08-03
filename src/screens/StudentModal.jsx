import Modal from "react-modal"

Modal.setAppElement("#root")

const StudentModal = ({ student, isOpen, onRequestClose }) => {
  if (!student) return null
  //if any of the character inputs is empty, return "unknown"

  if (student.house === "") {
    student.house = "unknown"
  }
  if (student.dateOfBirth === "" || student.dateOfBirth === undefined || student.dateOfBirth === null) {
    student.dateOfBirth = "unknown"
  }
  if (student.ancestry === "") {
    student.ancestry = "unknown"
  }
  if (student.eyeColour === "") {
    student.eyeColour = "unknown"
  }
  if (student.hairColour === "") {
    student.hairColour = "unknown"
  }
  if (student.patronus === "") {
    student.patronus = "unknown"
  }
  if (student.actor === "") {
    student.actor = "unknown"
  }
  if (student.wizard ) {
    student.wizard = "Yes"
  } else {
    student.wizard = "No"
  }

  
  return (
    <Modal className={"modal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Student Modal"
    >
      <div className="modal-content">
        <h2 className="modal-title">{student.name}</h2>
        <img className="modal-image" src={student.image} alt={student.name} />
        <div>
          <p className="modal-description"><span>House: </span> {student.house}</p>
          <p className="modal-description"><span>D.O.B: </span>  {student.dateOfBirth}</p>
          <p className="modal-description"><span>Ancestry: </span>  {student.ancestry}</p>
          <p className="modal-description"><span>Gender: </span>  {student.gender}</p>
          <p className="modal-description"><span>Wizard: </span>  {student.wizard}</p>
          <p className="modal-description"><span>Patrounus: </span>  {student.patronus}</p>
          <p className="modal-description"><span>Actor: </span>  {student.actor}</p>
        </div>
        <button className="modal-close" onClick={onRequestClose}>X</button>
      </div>
    </Modal>
  )
}

export default StudentModal

