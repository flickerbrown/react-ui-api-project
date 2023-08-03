import Modal from "react-modal"

Modal.setAppElement("#root")

const StaffModal = ({ staff, isOpen, onRequestClose }) => {
  if (!staff) return null
  //if any of the staff inputs is empty, return "unknown"

  if (staff.house === "") {
    staff.house = "unknown"
  }
  if (staff.dateOfBirth === "" || staff.dateOfBirth === undefined || staff.dateOfBirth === null) {
    staff.dateOfBirth = "unknown"
  }
  if (staff.ancestry === "") {
    staff.ancestry = "unknown"
  }
  if (staff.Gender === "") {
    staff.Gender = "unknown"
  }
  if (staff.patronus === "") {
    staff.patronus = "unknown"
  }
  if (staff.actor === "") {
    staff.actor = "unknown"
  }
  if (staff.wizard ) {
    staff.wizard = "Yes"
  } else {
    staff.wizard = "No"
  }

  
  return (
    <Modal className={"modal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Modal"
    >
      <div className="modal-content">
        <h2 className="modal-title">{staff.name}</h2>
        <img className="modal-image" src={staff.image} alt={staff.name} />
        <div>
          <p className="modal-description"><span>House: </span> {staff.house}</p>
          <p className="modal-description"><span>D.O.B: </span>  {staff.dateOfBirth}</p>
          <p className="modal-description"><span>Ancestry: </span>  {staff.ancestry}</p>
          <p className="modal-description"><span>Gender: </span>  {staff.gender}</p>
          <p className="modal-description"><span>Wizard: </span>  {staff.wizard}</p>
          <p className="modal-description"><span>Patrounus: </span>  {staff.patronus}</p>
          <p className="modal-description"><span>Actor: </span>  {staff.actor}</p>
        </div>
        <button className="modal-close" onClick={onRequestClose}>X</button>
      </div>
    </Modal>
  )
}

export default StaffModal

