const { useState } = React

export function NoteTools({
  note,
  onRemoveNote,
  onToggleEditScreen,
  setChangeBgNote,
}) {
  const [isOpenPalette, setIsOpenPalette] = useState(null)

  function onTogglePalette(note) {
    setIsOpenPalette(note)
  }

  return (
    <section className="note-box-tools flex space-around">
      <img
        onClick={() => onRemoveNote(note.id)}
        src={`../../../assets/img/icon/trash-icon.png`}
        alt=""
      />
      <img src="../../../assets/img/icon/inbox-icon.png" alt="" />
      <img
        onClick={() => onToggleEditScreen(note)}
        src="../../../assets/img/icon/compose-icon.png"
        alt=""
      />
      <i className="fa-brands fa-whatsapp"></i>
      <i className="fa-regular fa-bell"></i>
      <button onClick={() => onTogglePalette(note)}>
        <i className="fa-solid fa-palette"></i>
      </button>
      {isOpenPalette && (
        <PaletteNote
          note={note}
          onTogglePalette={onTogglePalette}
          setChangeBgNote={setChangeBgNote}
        />
      )}
    </section>
  )
}
