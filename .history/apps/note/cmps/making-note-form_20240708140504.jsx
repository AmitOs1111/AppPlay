const { useState, useEffect, useRef } = React

export function MakingNoteForm() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('making note from')
    inputRef.current.focus()
  })

  return (
    <section className="making-note-form">
      <DynamicCmp cmpType={'Text'} inputRef={inputRef} />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'Text':
      return <NoteTxt inputRef={props.inputRef} />

    case 'Todo':
      return <NoteTodo inputRef={props.inputRef} />
  }
}

function NoteTxt({ inputRef }) {
  return (
    <section className="note-text flex column">
      <label htmlFor="note-txt-title"></label>
      <input type="text" id="note-txt-title" placeholder="Title" />

      <label htmlFor="note-txt"></label>
      <textarea
        ref={inputRef}
        name="txt"
        id="note-txt"
        cols="30"
        rows="3"
        placeholder="New note..."
      ></textarea>
      {/* <input ref={inputRef} type="text" id="note-txt" placeholder="New note..." /> */}
    </section>
  )
}

function NoteTodo({ inputRef }) {
  return (
    <section className="note-text">
      <label htmlFor=""></label>
      <input ref={inputRef} type="text" placeholder="New todo..." />
    </section>
  )
}
