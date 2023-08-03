export default function Characters({ character, onClick }) {
  if (!character.image) return null

  return (
    <div >
      <button className='character-button' onClick={onClick}>
        <img className='character-image' src={character.image} alt={character.name} />
      </button>
    </div>
  )
}
