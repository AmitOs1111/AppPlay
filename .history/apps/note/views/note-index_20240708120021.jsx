import { NoteList } from '../cmps/note-list.jsx'
import { NoteHeader } from '../cmps/note-header.jsx'

export function NoteIndex() {
  return (
    <section className="note-index main-layout">
      <NoteHeader />

      <main>
        <div className="main-note-header ">
          <div className="display-note-container flex">
            <div className="new-note">New note...</div>
            <div className="type-note">
              <button>youtube</button>
              <button>image</button>
              <button>todo</button>
            </div>
          </div>
          <NoteList />
        </div>
      </main>
    </section>
  )
}
