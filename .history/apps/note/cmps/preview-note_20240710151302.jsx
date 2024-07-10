const { useState } = React

export function PreviewNote({ note }) {
  const [isDone, setIsDone] = useState('false')

  function clickedIsDone() {}

  let { title, txt, todos } = note.info
  return (
    <section className="preview-note">
      <h2>{title}</h2>
      {txt && <p>{txt}</p>}
      {todos &&
        todos.map((todo, idx) => (
          <article key={'todo' + idx}>
            {todo.txt}
            <button onClick={() => clickedIsDone()} className="box box-sign">
              {isDone ? (
                <i className="fa-regular fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-square"></i>
              )}
            </button>
          </article>
        ))}
    </section>
  )
}
