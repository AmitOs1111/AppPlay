const { useState, useEffect } = React

import { PreviewNote } from '../cmps/preview-note.jsx'
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
        <article key={note.id}>
          <PreviewNote note={note} />
          <div className="note-box-tools">
            <img src="../../../assets/img/icon/trash" alt="" />
            <img src="../../../assets/img/icon/inbox" alt="" />
          </div>
        </article>
      ))}
    </section>
  )
}
