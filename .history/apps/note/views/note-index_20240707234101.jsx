import { NoteList } from '../cmps/note-list.jsx'

export function NoteIndex() {
  return (
    <section className="note-index ">
      <header className="note-header flex">
        <div className="note-logo">Note</div>
        <div className="main-search-container flex">
          <div className="spotlight">🔎</div>
          <input type="text" placeholder="Search" />
        </div>
      </header>

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
