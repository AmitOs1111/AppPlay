export function PreviewNote({ note }) {
  return (
    <section className="preview-list">
      <p>{`${note.info.txt}`}</p>
    </section>
  )
}
