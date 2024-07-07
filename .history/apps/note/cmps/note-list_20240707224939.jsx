const { useState, useEffect } = React

export function NoteList() {
  useEffect(() => {
    console.log('NoteList')
  }, [])

  return (
    <section className="note-list">
      <div className="list list1">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
      <div className="list list2">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
      <div className="list list3">
        <ul>
          <li>123</li>
          <li>1vdsv</li>
          <li>1dsvsd</li>
        </ul>
      </div>
    </section>
  )
}
