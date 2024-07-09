const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

import { PreviewNote } from '../cmps/preview-note.jsx'
import { EditNote } from '../cmps/edit-note.jsx'

export function NoteList({ notesList, onRemoveNote, setAddNote }) {
  const [editNote, setEditNote] = useState(null)

  function onToggleEditScreen(note) {
    setEditNote(note)
  }

  if (!notesList) return <div>Loading...</div>
  const { backgroundColor } = note.style
  return (
    <section className="note-list">
      {notesList.map((note) => (
        <article
          style={{ backgroundColor }}
          className="note-card flex column space-between"
          key={note.id}
        >
          <PreviewNote note={note} />

          <div className="note-box-tools flex">
            <img
              onClick={() => onRemoveNote(note.id)}
              src={`../../../assets/img/icon/trash-icon.png`}
              alt=""
            />
            <img src="../../../assets/img/icon/inbox-icon.png" alt="" />
            <img
              onClick={() => onToggleEditScreen(note)}
              src="../../../assets/img/icon/compose-icon.png"
              alt=""
            />
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-solid fa-palette"></i>
          </div>
        </article>
      ))}
      {editNote && (
        <EditNote
          editNote={editNote}
          setAddNote={setAddNote}
          onToggleEditScreen={onToggleEditScreen}
        />
      )}
    </section>
  )
}
