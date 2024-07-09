export function PaletteNote({ note, onTogglePalette, setChangeBgNote }) {
  return (
    <section>
      <button onClick={() => setChangeBgNote(note, 'red')}>red</button>
      <button onClick={() => setChangeBgNote(note, 'green')}>green</button>
      <button onClick={() => setChangeBgNote(note, 'blue')}>blue</button>
      <button onClick={() => onTogglePalette(null)}>x</button>
    </section>
  )
}
