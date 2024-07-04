const { useState, useEffect } = React

export function Compose() {
  const [contentCompose, setContentCompose] = useState({
    to: '',
    subject: '',
    body: '',
  })

  useEffect(() => {
    console.log('hello compose', contentCompose)
  }, [contentCompose])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    setContentCompose((prevContentCompose) => ({
      ...prevContentCompose,
      [field]: value,
    }))
  }

  const { to, subject, body } = contentCompose
  return (
    <section className="compose ">
      <div className="compose-header flex space-between">
        <h3>New Message</h3>
        <button>x</button>
      </div>
      <form className="flex column">
        <input
          value={to}
          onChange={handleChange}
          name="to"
          type="text"
          placeholder="To"
        />
        <input
          value={subject}
          onChange={handleChange}
          name="subject"
          type="text"
          placeholder="Subject"
        />
        <textarea
          value={body}
          onChange={handleChange}
          name="body"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <div className="compose-footer flex space-between">
        <button className="send">Send</button>
        <button>delete</button>
      </div>
    </section>
  )
}
