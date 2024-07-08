const { useState, useEffect, useRef } = React

export function NoteTxt() {
  const [note, setNote] = useState({ title: '', txt: '' })
  const inputRef = useRef()

  useEffect(() => {
    console.log('from note txt')
    inputRef.current.focus()
  })

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value :', value)
    // setNote((prevNote) => ({
    //   ...prevNote,
    //   [field]: value,
    // }))
  }

  function onAddNote(ev) {
    ev.preventDefault()
    console.log('ev.target', ev.target)
  }
  return (
    <section className="note-text ">
      <form onSubmit={() => onAddNote(event)} className="flex column">
        <label htmlFor="note-txt-title"></label>
        <input
          onChange={handelChange}
          type="text"
          name="title"
          id="note-txt-title"
          placeholder="Title"
        />

        <label htmlFor="note-txt"></label>
        <textarea
          onChange={handelChange}
          ref={inputRef}
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
