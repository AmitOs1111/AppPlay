const { useState, useEffect } = React

export function MakingNoteForm() {
  useEffect(() => {
    console.log('making note from')
  })
  return (
    <section className="making-note-form">
      <label htmlFor=""></label>
      <input type="text" placeholder="New note..." />
    </section>
  )
}
