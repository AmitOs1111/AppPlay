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
    </section>
  )
}
