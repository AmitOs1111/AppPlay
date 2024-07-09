export function EditNote({ editNote }) {
  return (
    <section className="edit-note">
      hello edit
      <NoteTxt note={editNote} setAddNote={setAddNote} />
    </section>
  )
}
