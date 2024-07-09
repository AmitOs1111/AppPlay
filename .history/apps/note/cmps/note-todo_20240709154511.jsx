const { useState, useEffect } = React

export function TodoList() {
  const [todos, setTodos] = useState([])

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
