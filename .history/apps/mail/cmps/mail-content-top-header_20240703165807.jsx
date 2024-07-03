export function MailContentTopHeader({ mail }) {
  function onSelectMail({ target }) {
    console.log('val', target)
  }

  return (
    <section className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <select name="" id="" onChange={onSelectMail()}>
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
          <option value="none">none</option>
        </select>
      </div>
      <div className="box-mail-counter-header">1-50</div>
    </section>
  )
}
