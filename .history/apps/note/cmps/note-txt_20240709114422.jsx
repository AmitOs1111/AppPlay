import { noteService } from '../services/note.service.js'

const { useState, useEffect, useRef } = React

export function NoteTxt({ note, setAddNote }) {
  const [editNote, setEditNote] = useState(note || noteService.getEmptyNote())
  const inputRef = useRef()

  useEffect(() => {
    console.log('from note txt')
    inputRef.current.focus()
  }, [])

  function handelChange({ target }) {
    const field = target.name
    console.log('field', field)
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', value)
    setEditNote((prevEditNote) => ({
      ...prevEditNote.info,
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
