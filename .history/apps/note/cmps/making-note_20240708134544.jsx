const { useState } = React

import { MakingNoteForm } from '../cmps/making-note-form.jsx'

export function MakingNote() {
  const [isOpenMakingNote, setIsOpenMakingNote] = useState(false)

  function onToggleMakingNote(ev) {
    console.log(ev)
    setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  return (
    <section className="making-note">
      <div className="box-show-making-note flex">
        <div className="new-note" onClick={() => onToggleMakingNote()}>
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
