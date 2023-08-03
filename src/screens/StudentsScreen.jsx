import { useState, useEffect } from "react"
import { getAllStudents } from "../services/hpCharacters"
import StudentsComponents from "../components/StudentsComponent"
import StudentModal from "./StudentModal"

export default function Students() {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  async function fetchStudents (){
    const allStudents = await getAllStudents()
    setStudents(allStudents)
  }

  function openModal(student) {
    setSelectedStudent(student)
  }

  function closeModal() {
    setSelectedStudent(null)
  }

  return (
    <div>
      <h1>Harry Potter Students</h1>
      <div className="harry-potter-characters">
        {students.map((student) => (
          <StudentsComponents
            student={student}
            key={student.id}
            onClick={ student.image ? () => openModal(student) : null}
          />
        ))}
      </div>
      <StudentModal
        student={selectedStudent}
        isOpen={!!selectedStudent}
        onRequestClose={closeModal}
      />
    </div>
  )
}
