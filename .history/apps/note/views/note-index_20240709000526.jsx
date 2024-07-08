import { NoteList } from '../cmps/note-list.jsx'
import { NoteHeader } from '../cmps/note-header.jsx'
import { MakingNote } from '../cmps/making-note.jsx'

export function NoteIndex() {
  function setAddNote(note) {
    console.log('add note from index', note)
  }

  return (
    <section className="note-index main-layout">
      <NoteHeader />

      <main>
        <MakingNote setAddNote={setAddNote} />

        <NoteList />
      </main>
    </section>
  )
}
