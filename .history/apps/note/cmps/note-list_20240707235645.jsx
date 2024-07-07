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
        <article className="note-card flex column space-between" key={note.id}>
          <PreviewNote note={note} />
          <div className="note-box-tools flex">
            <img src={`../../../assets/img/icon/trash-icon.png`} alt="" />
            <img src="../../../assets/img/icon/inbox-icon.png" alt="" />
          </div>
        </article>
      ))}
    </section>
  )
}
