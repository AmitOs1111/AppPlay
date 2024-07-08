const { useState, useEffect, useRef } = React

export function MakingNoteForm() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('making note from')
    inputRef.current.focus()
  })

  return (
    <section className="making-note-form">
      <label htmlFor=""></label>
      <input ref={inputRef} type="text" placeholder="New note..." />
    </section>
  )
}
