const { useState } = React

import { MakingNoteForm } from '../cmps/making-note-form.jsx'

export function MakingNote() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="making-note">
      <div
        className="box-show-making-note flex"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <div className="new-note">What's on your mind...</div>
        <div className="type-note">
          <button>youtube</button>
          <button>image</button>
          <button>todo</button>
        </div>
      </div>
      <MakingNoteForm />
    </section>
  )
}
