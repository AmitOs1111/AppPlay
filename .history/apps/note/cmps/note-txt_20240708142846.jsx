const { useState, useEffect, useRef } = React

export function NoteTxt() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('from note txt')
    inputRef.current.focus()
  })
  function onAddNote(ev) {
    ev.preventDefault()
    console.log('submit')
  }
  return (
    <section className="note-text ">
      <form onSubmit={() => onAddNote(event)} className="flex column">
        <label htmlFor="note-txt-title"></label>
        <input
          ref={inputRef}
          type="text"
          id="note-txt-title"
          placeholder="Title"
        />

        <label htmlFor="note-txt"></label>
        <textarea
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
