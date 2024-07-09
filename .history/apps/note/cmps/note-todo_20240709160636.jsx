const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function TodoList(noteToEdit) {
  const [note, setNote] = useState(
    noteToEdit || noteService.getEmptyNote('note-todo')
  )

  //   function handelChange({ target }) {
  //     const field = target.name
  //     const value = target.type === 'number' ? +target.value : target.value

  //     setEditNote((prevEditNote) => ({
  //       ...prevEditNote,
  //       info,
  //     }))
  //   }
  console.log('note', note)
  if (!note) return <section>Loading</section>
  let { todos } = note.info
  return (
    <section className="note-text flex column">
      <label htmlFor="title-todo"></label>
      <input
        name="title-todo"
        type="text"
        id="title-todo"
        placeholder="Title"
      />
      {todos.map((todo, idx) => (
        <article key={'todo' + idx}>
          <button>x</button>
          <label htmlFor="todo"></label>
          <input name="todo" type="text" id="todo" placeholder="Todo" />
        </article>
      ))}

      <label htmlFor="add-todo"></label>
      <input name="add-todo" type="text" id="add-todo" placeholder="Todo" />
    </section>
  )
}
