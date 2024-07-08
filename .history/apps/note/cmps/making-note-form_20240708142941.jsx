const { useState, useEffect, useRef } = React

import { NoteTxt } from '../cmps/note-txt.jsx'

export function MakingNoteForm() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('making note from')
    inputRef.current.focus()
  })

  return (
    <section className="making-note-form">
      <DynamicCmp cmpType={'Text'} />
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

function NoteTodo({ inputRef }) {
  return (
    <section className="note-text">
      <label htmlFor=""></label>
      <input type="text" placeholder="New todo..." />
    </section>
  )
}
