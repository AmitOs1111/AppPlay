export function Compose() {
  return (
    <section className="compose ">
      <div className="compose-header flex">
        <h3>New Message</h3>
        <button>x</button>
      </div>
      <form className="flex column">
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <div className="compose-footer flex space-between">
        <button>Send</button>
        <button>delete</button>
      </div>
    </section>
  )
}
