export default function Staff({ staff, onClick }) {
  if (!staff.image) return null

  return (
    <div >
      <button className='character-button' onClick={onClick}>
        <img className='character-image' src={staff.image} alt={staff.name} />
      </button>
    </div>
  )
}
