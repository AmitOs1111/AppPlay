const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function TodoList({ noteToEdit }) {
  const [note, setNote] = useState(
    noteToEdit || noteService.getEmptyNote('note-todo')
  )
  const [info, setInfo] = useState(note.info)

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', value)
    //change text todo note
    if (field.includes('todos')) {
      const currIdx = +field.split('-')[1]
      info.todos[currIdx].txt = value
    } else {
      info[field] = value
    }

    setInfo((prevInfo) => ({
      ...prevInfo,
      info,
    }))
  }

  if (!note) return <section>Loading</section>
  console.log('note', note)
  let { title, todos } = info
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
        value={todos[todos.length - 1].txt}
        name={`todos-${todos.length - 1}`}
        type="text"
        id="add-todo"
        placeholder="add todo"
      />
    </section>
  )
}
