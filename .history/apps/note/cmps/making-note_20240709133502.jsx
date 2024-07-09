const { useState } = React

import { MakingNoteForm } from '../cmps/making-note-form.jsx'

export function MakingNote({ setAddNote }) {
  const [isOpenMakingNote, setIsOpenMakingNote] = useState(false)

  function onToggleMakingNote(ev) {
    ev.stopPropagation()
    setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
  }

  function onToggleMakingNoteSection({ target }) {
    const clickedInto = target.className.includes('making-note') ? true : false
    if (isOpenMakingNote && clickedInto)
      setIsOpenMakingNote((prevIsOpen) => !prevIsOpen)
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
            <button>
              <i className="fa-solid fa-list"></i>
            </button>
            <button>
              <i className="fa-brands fa-youtube"></i>
            </button>
            <button>
              <i className="fa-regular fa-image"></i>
            </button>
            <button>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button>
              <i class="fa-regular fa-map"></i>
            </button>
          </div>
        </div>
      )}

      {isOpenMakingNote && <MakingNoteForm setAddNote={setAddNote} />}
    </section>
  )
}
