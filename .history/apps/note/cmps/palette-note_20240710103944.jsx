export function PaletteNote({ note, onTogglePalette, setChangeBgNote }) {
  return (
    <section className="palette-note">
      <button onClick={() => setChangeBgNote(note, 'red')}></button>
      <button onClick={() => setChangeBgNote(note, 'green')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
      <button onClick={() => setChangeBgNote(note, 'blue')}></button>
    </section>
  )
}
