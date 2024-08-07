export function PaletteNote({ note, onTogglePalette, setChangeBgNote }) {
  const colors = [
    { backgroundColor: '#e29696' },
    { backgroundColor: '#e8d692' },
    { backgroundColor: '#a8e499' },
    { backgroundColor: '#99e0e4' },
    { backgroundColor: '#99a8e4' },
    { backgroundColor: '#e099e4' },
    { backgroundColor: '#691215' },
    { backgroundColor: '#124d69' },
    { backgroundColor: '#1b6912' },
  ]
  return (
    <section className="palette-note flex">
      {colors.map((color) => (
        <button
          className="btn-palette "
          style={color}
          key={color.backgroundColor}
          onClick={() => setChangeBgNote(note, color.backgroundColor)}
        ></button>
      ))}
      <button onClick={() => setChangeBgNote(note, '#fff')}>
        <i className="fa-solid fa-droplet-slash"></i>
      </button>
      <button onClick={() => onTogglePalette(null)}>x</button>
    </section>
  )
}
