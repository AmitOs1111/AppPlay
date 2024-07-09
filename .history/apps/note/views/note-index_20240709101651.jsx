const { useState, useEffect } = React
import { noteService } from '../services/note.service.js'

import { NoteList } from '../cmps/note-list.jsx'
import { NoteHeader } from '../cmps/note-header.jsx'
import { MakingNote } from '../cmps/making-note.jsx'

export function NoteIndex() {
  const [notesList, setNotesList] = useState([])

  useEffect(() => {
    console.log('Note index')
    loadNotes()
  }, [])

  function loadNotes() {
    noteService
      .query()
      .then((notes) => {
        console.log('notes:', notes)
        setNotesList(notes)
      })
      .catch((err) => {
        console.log('Had issued in notes list', err)
      })
  }

  function setAddNote(note) {
    noteService.save(note).then(() => loadNotes())
  }

  function onRemoveNote(noteId) {
    console.log('noteId:', noteId)
    noteService.remove(noteId).then(() => loadNotes())
  }

  return (
    <section className="note-index main-layout">
      <NoteHeader />

      <main>
        <MakingNote setAddNote={setAddNote} />

        <NoteList notesList={notesList} onRemoveNote={onRemoveNote} />
      </main>
    </section>
  )
}
