export function NoteHeader() {
  return (
    <header className="note-header full main-layout ">
      <div className="header-content  flex justify-center">
        <div className="note-logo">Note</div>
        <div className="main-search-container flex">
          <div className="spotlight">🔎</div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  )
}
