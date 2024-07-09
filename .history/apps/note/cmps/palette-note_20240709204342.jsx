export function PaletteNote({ onTogglePalette }) {
  return (
    <section>
      hello Palette
      <button onClickCapture={() => onTogglePalette(null)}>x</button>
    </section>
  )
}
