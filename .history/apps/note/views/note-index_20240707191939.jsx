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
      <aside className="filter-by-note">
        <ul>
          <li>notes</li>
          <li>remainder</li>
          <li>insertion</li>
        </ul>
      </aside>

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
        </div>
      </main>
    </section>
  )
}
