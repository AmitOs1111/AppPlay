const { useState, useEffect } = React
import { noteService } from '../services/note.service.js'
import { showUserMsg } from '../../services/event-bus.service.js'
import { showUserMsg } from '../services/event-bus.service.js'

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
    console.log('note:', note)
    noteService.save(note).then(() => loadNotes())
  }

  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      loadNotes()
      console.log('Remove')
      showUserMsg('Remove')
    })
  }

  function setChangeBgNote(note, color) {
    note.style = { backgroundColor: color }
    noteService.save(note).then(() => loadNotes())
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
