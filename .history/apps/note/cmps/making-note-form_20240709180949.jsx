const { useState, useEffect } = React

import { NoteTxt } from '../cmps/note-txt.jsx'
import { TodoList } from '../cmps/note-todo.jsx'

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
    case 'TextNote':
      return <NoteTxt setAddNote={props.setAddNote} />

    case 'TodoList':
      return <TodoList setAddNote={props.setAddNote} />

    case 'VideoNote':
      return <VideoNote setAddNote={props.setAddNote} />

    case 'ImgNote':
      return <ImgNote setAddNote={props.setAddNote} />

    case 'DrawNote':
      return <DrawNote setAddNote={props.setAddNote} />

    case 'MapNote':
      return <MapNote setAddNote={props.setAddNote} />
  }
}

function VideoNote() {
  return <section>VideoNote</section>
}

function ImgNote() {
  return <section>ImgNote</section>
}

function DrawNote() {
  return <section>DrawNote</section>
}

function MapNote() {
  return <section>MapNote</section>
}
