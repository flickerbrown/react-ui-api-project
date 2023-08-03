import { useState, useEffect } from "react"
import { getAllStaff } from "../services/hpCharacters"
import StaffComponent from "../components/StaffComponent"
import StaffModal from "./StaffModal"

export default function Staff() {
  const [staff, setStaff] = useState([])
  const [selectedStaff, setSelectedStaff] = useState(null)

  useEffect(() => {
    fetchStaff()
  }, [])

  async function fetchStaff (){
    const allCharacters = await getAllStaff()
    setStaff(allCharacters)
  }

  function openModal(character) {
    setSelectedStaff(character)
  }

  function closeModal() {
    setSelectedStaff(null)
  }

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <div className="harry-potter-characters">
        {staff.map((staff) => (
          <StaffComponent
            staff={staff}
            key={staff.id}
            onClick={ staff.image ? () => openModal(staff) : null}
          />
        ))}
      </div>
      <StaffModal
        character={selectedStaff}
        isOpen={!!selectedStaff}
        onRequestClose={closeModal}
      />
    </div>
  )
}
