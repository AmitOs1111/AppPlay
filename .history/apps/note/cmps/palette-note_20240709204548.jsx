export function PaletteNote({ onTogglePalette, setChangeBgNote }) {
  return (
    <section>
      <button onClick={() => setChangeBgNote('red')}>red</button>
      <button onClick={() => setChangeBgNote('green')}>green</button>
      <button onClick={() => setChangeBgNote('blue')}>blue</button>
      <button onClick={() => onTogglePalette(null)}>x</button>
    </section>
  )
}
