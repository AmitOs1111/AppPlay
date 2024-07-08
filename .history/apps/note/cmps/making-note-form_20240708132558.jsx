const { useState, useEffect, useRef } = React

export function MakingNoteForm() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('making note from')
    inputRef.current.focus()
  })

  return (
    <section className="making-note-form">
      <DynamicCmp cmpType={'Todo'} inputRef={inputRef} />
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
    <section className="note-text">
      <label htmlFor=""></label>
      <input ref={inputRef} type="text" placeholder="New note..." />
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
