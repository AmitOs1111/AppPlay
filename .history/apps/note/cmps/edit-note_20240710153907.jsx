import { NoteTxt } from '../cmps/note-txt.jsx'

export function EditNote({ editNote, setAddNote, onToggleEditScreen }) {
  return (
    <section className="edit-note">
      <NoteTxt note={editNote} setAddNote={setAddNote} />
      <button
        onClick={() => {
          onToggleEditScreen(null)
        }}
      >
        close
      </button>
    </section>
  )
}
