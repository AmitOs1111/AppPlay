const { useState } = React

import { MakingNoteForm } from '../cmps/making-note-form.jsx'

export function MakingNote() {
  const [isOpenMakingNote, setIsOpenMakingNote] = useState(false)

  function onToggleMakingNote(ev) {
    ev.stopPropagation()
    setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  function onToggleMakingNoteSection(ev) {
    if (isOpenMakingNote) setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  return (
    <section
      className="making-note"
      onClick={() => onToggleMakingNoteSection(event)}
    >
      <div className="box-show-making-note flex">
        <div className="new-note" onClick={() => onToggleMakingNote(event)}>
          What's on your mind...
        </div>
        <div className="type-note">
          <button>youtube</button>
          <button>image</button>
          <button>todo</button>
        </div>
      </div>

      {isOpenMakingNote && <MakingNoteForm />}
    </section>
  )
}
