const { useState, useEffect, useRef } = React

export function MakingNoteForm() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('making note from')
    inputRef.current.focus()
  })

  return (
    <section className="making-note-form">
      <DynamicCmp />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'Text':
      return <NoteTxt />
    case 'Todo':
      return <NoteTodo />
  }
}

function NoteTxt() {
  return (
    <section className="note-text">
      <label htmlFor=""></label>
      <input ref={inputRef} type="text" placeholder="New note..." />
    </section>
  )
}

function NoteTodo() {
  return (
    <section className="note-text">
      <label htmlFor=""></label>
      <input ref={inputRef} type="text" placeholder="New todo..." />
    </section>
  )
}
