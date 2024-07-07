const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteList() {
  const [notesList, setNotesList] = useState([])
  useEffect(() => {
    console.log('NoteList')
    loadNotes()
  }, [])

  function loadNotes() {
    noteService.query().then((notes) => {
      console.log('notes:', notes)
      setNotesList(notes)
    })
  }

  if (!notesList) return <div>Loading...</div>
  return (
    <section className="note-list">
      {notesList.map((note) => (
        <article key={note.id}>{`${note.info.txt}`}</article>
      ))}
    </section>
  )
}
