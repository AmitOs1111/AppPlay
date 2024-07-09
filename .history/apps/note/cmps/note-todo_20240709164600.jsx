const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function TodoList({ noteToEdit }) {
  const [note, setNote] = useState(
    noteToEdit || noteService.getEmptyNote('note-todo')
  )

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value

    let { info } = note
    info[field] = value
    if (field.includes('todos')) {
      console.log('yessssss', +field.split('-'))[1]
      // info[field][idx].txt = value
    }

    setNote((prevNote) => ({
      ...prevNote,
      info,
    }))
  }

  if (!note) return <section>Loading</section>
  console.log('note', note)
  let { title, todos } = note.info
  return (
    <section className="note-text flex column">
      <label htmlFor="title-todo"></label>
      <input
        onChange={handelChange}
        value={title}
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
            <input name="todos" type="text" id="todo" placeholder="Todo" />
          </article>
        ))}

      <label htmlFor="add-todo"></label>
      <input
        onChange={handelChange}
        name={`todos-${todos.length - 1}`}
        type="text"
        id="add-todo"
        placeholder="add todo"
      />
    </section>
  )
}
