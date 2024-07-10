const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function TodoList({ noteToEdit, setAddNote }) {
  const [note, setNote] = useState(
    noteToEdit || noteService.getEmptyNote('note-todo')
  )
  const [info, setInfo] = useState(JSON.parse(JSON.stringify(note.info)))

  useEffect(() => {
    // useEffect for not rendering *setAddNote(note)*
    console.log('----Hello------:')
  }, [])

  useEffect(() => {
    if (info.todos.length > 0) setAddNote(note)
  }, [note])

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', value)
    console.log('field', field)

    let newInfo = { ...info }

    if (field.includes('todos')) {
      const currIdx = +field.split('-')[1]
      newInfo.todos[currIdx].txt = value
    } else {
      newInfo[field] = value
    }
    console.log('newInfo:', newInfo)
    setInfo((prevInfo) => ({
      ...prevInfo,
      ...newInfo,
    }))
  }

  function onAddTodo() {
    let { todos } = info
    todos.push({ txt: '' })

    setInfo((prevInfo) => ({
      ...prevInfo,
      todos,
    }))
  }

  function onAddNote() {
    setNote((prevNote) => ({
      ...prevNote,
      info,
    }))
  }

  if (!note) return <section>Loading</section>
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

      {/* {todos.length > 0 &&
        todos[0].txt &&
        todos.map((todo, idx) => (
          <article key={'todo' + idx}>
            <button>x</button>
            <label htmlFor="todo"></label>
            <input
              onChange={handelChange}
              name={`todos-${idx + 1}`}
              type="text"
              id="todo"
              placeholder="Todo"
            />
          </article>
        ))} */}

      <label htmlFor="add-todo"></label>
      <input
        onChange={handelChange}
        value={todos[todos.length - 1].txt}
        name={`todos-${todos.length - 1}`}
        type="text"
        id="add-todo"
        placeholder="add todo"
      />

      <button onClickCapture={() => onAddTodo()}>add todo</button>
      <button onClickCapture={() => onAddNote()}>add note</button>
      {todos.length > 0 &&
        todos[0].txt &&
        todos.map((todo, idx) => (
          <article key={'todo' + idx} className={`todo-${idx}`}>
            <button>x</button>
            <label htmlFor="todo"></label>
            <input
              onChange={handelChange}
              value={todo.txt}
              name={`todos-${idx + 1}`}
              type="text"
              id="todo"
              placeholder="Todo"
            />
            <button>
              <i className="fa-regular fa-square"></i>
            </button>
          </article>
        ))}
    </section>
  )
}
