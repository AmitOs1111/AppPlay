export function PreviewNote({ note }) {
  return (
    <section className="preview-note">
      <p>{`${note.info.txt}`}</p>
    </section>
  )
}
