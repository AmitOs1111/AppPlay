const { useState } = React
import { noteService } from '../services/note.service.js'

import { NoteList } from '../cmps/note-list.jsx'
import { NoteHeader } from '../cmps/note-header.jsx'
import { MakingNote } from '../cmps/making-note.jsx'

export function NoteIndex() {
  const [note, setNote] = useState(null)

  function setAddNote(note) {
    console.log('add note from index', note)
    noteService.save(note).then((note) => setNote(note))
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
