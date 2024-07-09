const { useState, useEffect, useRef } = React

export function NoteTxt({ note, setAddNote }) {
  const [editNote, setEditNote] = useState(note || { title: '', txt: '' })
  const inputRef = useRef()

  useEffect(() => {
    console.log('from note txt', editNote)
    inputRef.current.focus()
  }, [])

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    setEditNote((prevEditNote) => ({
      ...prevEditNote,
      [field]: value,
    }))
  }

  function onAddNote(ev) {
    ev.preventDefault()
    setAddNote(editNote)
  }

  if (!editNote) return <section>Loading...</section>
  return (
    <section className="note-text ">
      <form onSubmit={() => onAddNote(event)} className="flex column">
        <label htmlFor="note-txt-title"></label>
        <input
          onChange={handelChange}
          value={editNote.info.title}
          type="text"
          name="title"
          id="note-txt-title"
          placeholder="Title"
        />

        <label htmlFor="note-txt"></label>
        <textarea
          onChange={handelChange}
          ref={inputRef}
          value={editNote.info.txt}
          name="txt"
          id="note-txt"
          cols="30"
          rows="3"
          placeholder="New note..."
        ></textarea>
        <button>add</button>
      </form>
      {/* <input ref={inputRef} type="text" id="note-txt" placeholder="New note..." /> */}
    </section>
  )
}
