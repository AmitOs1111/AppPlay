const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

import { PreviewNote } from '../cmps/preview-note.jsx'
import { EditNote } from '../cmps/edit-note.jsx'
import { PaletteNote } from '../cmps/palette-note.jsx'
import { NoteTools } from '../cmps/note-tools.jsx'

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
        <article className="container-note" key={note.id}>
          <div className="note-card " style={note.style}>
            <PreviewNote note={note} />
            <NoteTools onRemoveNote={onRemoveNote} />
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
