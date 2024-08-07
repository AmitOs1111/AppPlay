const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

import { PreviewNote } from '../cmps/preview-note.jsx'
import { EditNote } from '../cmps/edit-note.jsx'
import { PaletteNote } from '../cmps/palette-note.jsx'

export function NoteList({
  notesList,
  onRemoveNote,
  setAddNote,
  setChangeBgNote,
}) {
  const [editNote, setEditNote] = useState(null)
  const [isOpenPalette, setIsOpenPalette] = useState(null)

  function onToggleEditScreen(note) {
    setEditNote(note)
  }

  function onTogglePalette(note) {
    setIsOpenPalette(note)
  }

  if (!notesList) return <div>Loading...</div>
  return (
    <section className="note-list">
      {notesList.map((note) => (
        <article style={note.style} className="container-note" key={note.id}>
          <div className="note-card flex column ">
            <PreviewNote note={note} />

            <div className="note-box-tools flex space-around">
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
              <button onClick={() => onTogglePalette(note)}>
                <i className="fa-solid fa-palette"></i>
              </button>
            </div>
          </div>

          {isOpenPalette && (
            <PaletteNote
              note={note}
              onTogglePalette={onTogglePalette}
              setChangeBgNote={setChangeBgNote}
            />
          )}
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
