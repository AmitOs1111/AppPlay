const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function TodoList({ noteToEdit }) {
  const [note, setNote] = useState(
    noteToEdit || noteService.getEmptyNote('note-todo')
  )

  function handelChange({ target }, idx) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value

    let { info } = note
    info[field] = value
    if (field === 'todos') info[field][idx].txt = value

    setEditNote((prevEditNote) => ({
      ...prevEditNote,
      info,
    }))
  }

  if (!note) return <section>Loading</section>
  console.log('note', note)
  let { todos } = note.info
  return (
    <section className="note-text flex column">
      <label htmlFor="title-todo"></label>
      <input
        onChange={handelChange}
        name="title"
        type="text"
        id="title-todo"
        placeholder="Title"
      />

      {todos.length > 0 &&
        todos[0].txt &&
        todos.map((todo, idx) => (
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
