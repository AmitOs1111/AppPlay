export function PaletteNote({ note, onTogglePalette, setChangeBgNote }) {
  const colors = [
    '#e29696',
    '#e8d692',
    '#a8e499',
    '#99e0e4',
    '#99a8e4',
    '#e099e4',
    '#691215',
    '#124d69',
    '#1b6912',
  ]
  return (
    <section className="palette-note">
      {colors.map((color) => (
        <button
          style={color}
          key={color}
          onClick={() => setChangeBgNote(note, color)}
        ></button>
      ))}
    </section>
  )
}
