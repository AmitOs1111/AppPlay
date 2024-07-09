const { useState, useEffect } = React

import { PreviewNote } from '../cmps/preview-note.jsx'
import { noteService } from '../services/note.service.js'

export function NoteList({ notesList, onRemoveNote, setEditNotesetEditNote }) {
  const [editNote, setEditNote] = useState(null)

  function onEditNote(note) {
    setEditNote(note)
  }

  if (!notesList) return <div>Loading...</div>
  return (
    <section className="note-list">
      {notesList.map((note) => (
        <article className="note-card flex column space-between" key={note.id}>
          <PreviewNote note={note} />

          <div className="note-box-tools flex">
            <img
              onClick={() => onRemoveNote(note.id)}
              src={`../../../assets/img/icon/trash-icon.png`}
              alt=""
            />
            <img src="../../../assets/img/icon/inbox-icon.png" alt="" />
            <img
              onClick={() => onEditNote(note)}
              src="../../../assets/img/icon/compose-icon.png"
              alt=""
            />
          </div>
        </article>
      ))}
    </section>
  )
}
