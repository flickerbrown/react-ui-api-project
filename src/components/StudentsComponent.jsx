export default function Students({ student, onClick }) {
  if (!student.image) return null

  return (
    <div >
      <button className='character-button' onClick={onClick}>
        <img className='character-image' src={student.image} alt={student.name} />
      </button>
    </div>
  )
}
