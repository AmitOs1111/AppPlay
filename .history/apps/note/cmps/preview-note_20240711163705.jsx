const { useState } = React

export function PreviewNote({ note }) {
  const [isDone, setIsDone] = useState('false')

  function clickedIsDone() {
    setIsDone((prevIsDone) => !prevIsDone)
  }

  if (!note) return <section>Loading...</section>
  // console.log('note:', note)
  console.log('note.info:', note.info)
  let { title, txt, todos, src, videoId } = note.info
  return (
    <section className="preview-note">
      <h2>{title}</h2>
      {txt && <p>{txt}</p>}
      {todos &&
        todos.map((todo, idx) => (
          <article key={'todo' + idx} className="flex space-between">
            {todo.txt}
            <button onClick={() => clickedIsDone()}>
              {isDone ? (
                <i className="fa-regular fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-square"></i>
              )}
            </button>
          </article>
        ))}
      {src && <img src={src} alt="" />}
      {videoId && (
        <React.Fragment>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${video.videoId}"
          ></iframe>
        </React.Fragment>
      )}
    </section>
  )
}
