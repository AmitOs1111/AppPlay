const { useState, useEffect } = React

import { NoteTxt } from '../cmps/note-txt.jsx'

export function MakingNoteForm({ setAddNote, noteType }) {
  useEffect(() => {
    console.log('making note from')
  })

  return (
    <section className="making-note-form">
      <DynamicCmp cmpType={noteType} setAddNote={setAddNote} />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'Text':
      return <NoteTxt setAddNote={props.setAddNote} />

    case 'Todo':
      return <NoteTodo />
  }
}

function NoteTodo() {
  return (
    <section className="note-text">
      <label htmlFor=""></label>
      <input type="text" placeholder="New todo..." />
    </section>
  )
}
