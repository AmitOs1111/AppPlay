import { NoteTxt } from '../cmps/note-txt.jsx'

export function EditNote({ editNote, setAddNote }) {
  return (
    <section className="edit-note">
      hello edit
      <NoteTxt note={editNote} setAddNote={setAddNote} />
    </section>
  )
}
