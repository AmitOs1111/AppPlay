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
      .then((appNote) => {
        let { notes } = appNote
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

  function setChangeBgNote(note, color) {
    console.log('color:', note, color)
    note.style = { backgroundColor: color }
    console.log('color:', note, color)
  }

  return (
    <section className="note-index main-layout">
      <NoteHeader />

      <main>
        <MakingNote setAddNote={setAddNote} />

        <NoteList
          notesList={notesList}
          onRemoveNote={onRemoveNote}
          setAddNote={setAddNote}
          setChangeBgNote={setChangeBgNote}
        />
      </main>
    </section>
  )
}
