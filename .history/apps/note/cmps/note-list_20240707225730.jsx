const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteList() {
  const [notesList, setNotesList] = useState([])
  useEffect(() => {
    console.log('NoteList')
    loadNotes()
  }, [])

  function loadNotes() {
    noteService.query().then((notes) => {
      console.log('notes:', notes)
      setNotesList(notes)
    })
  }

  if (!notesList) return <div>Loading...</div>
  return (
    <section className="note-list">
      <div className="list list1">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
      <div className="list list2">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
      <div className="list list3">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
    </section>
  )
}
