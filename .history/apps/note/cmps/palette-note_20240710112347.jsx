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
    <section className="palette-note">
      {colors.map((color) => (
        <button
          className="btn-palette flex"
          style={color}
          key={color.backgroundColor}
          onClick={() => setChangeBgNote(note, color.backgroundColor)}
        ></button>
      ))}
      <button onClick={() => onTogglePalette(null)}>x</button>
    </section>
  )
}
