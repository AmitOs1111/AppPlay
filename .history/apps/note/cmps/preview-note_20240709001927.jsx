export function PreviewNote({ note }) {
  return (
    <section className="preview-note">
      <h2>{`${note.info.title}`}</h2>
      <p>{`${note.info.txt}`}</p>
    </section>
  )
}
