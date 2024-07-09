const { useState } = React

import { MakingNoteForm } from '../cmps/making-note-form.jsx'

export function MakingNote({ setAddNote }) {
  const [isOpenMakingNote, setIsOpenMakingNote] = useState(false)
  const [noteType, setNoteType] = useState('TextNote')

  function onToggleMakingNote(ev) {
    ev.stopPropagation()
    setNoteType('TextNote')
    setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  function onToggleMakingNoteSection({ target }) {
    const clickedInto = target.className.includes('making-note') ? true : false
    if (isOpenMakingNote && clickedInto)
      setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  function onSelectNoteType(type) {
    console.log('type', type)
    setNoteType(type)
  }

  return (
    <section
      className="making-note flex align-center justify-center"
      onClick={() => onToggleMakingNoteSection(event)}
    >
      {!isOpenMakingNote && (
        <div className="box-show-making-note flex space-between">
          <div className="new-note" onClick={() => onToggleMakingNote(event)}>
            What's on your mind...
          </div>
          <div className="type-note">
            <button onClick={() => onSelectNoteType('TodoList')}>
              <i className="fa-solid fa-list"></i>
            </button>
            <button onClick={() => onSelectNoteType('VideoNote')}>
              <i className="fa-brands fa-youtube"></i>
            </button>
            <button onClick={() => onSelectNoteType('ImgNote')}>
              <i className="fa-regular fa-image"></i>
            </button>
            <button onClick={() => onSelectNoteType('DrawNote')}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button onClick={() => onSelectNoteType('MapNote')}>
              <i className="fa-regular fa-map"></i>
            </button>
          </div>
        </div>
      )}

      {isOpenMakingNote && (
        <MakingNoteForm setAddNote={setAddNote} noteType={noteType} />
      )}
    </section>
  )
}
