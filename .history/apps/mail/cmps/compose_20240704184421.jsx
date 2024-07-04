export function Compose() {
  return (
    <section className="compose flex column">
      <div className="compose-header">
        <h3>New Message</h3>
        <button>x</button>
      </div>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <div className="compose-footer">
        <button>Send</button>
        <button>delete</button>
      </div>
    </section>
  )
}
