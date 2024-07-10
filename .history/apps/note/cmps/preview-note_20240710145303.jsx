export function PreviewNote({ note }) {
  let { title, txt, todos } = note.info
  console.log(title, txt, todos)
  return (
    <section className="preview-note">
      <h2>{title}</h2>
      {txt && <p>{txt}</p>}
      {todos &&
        todos.map((todo, idx) => (
          <article key={'todo' + idx}>{todo.txt}</article>
        ))}
    </section>
  )
}
