export function MailContentTopHeader() {
  return (
    <div className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <select name="" id="">
          <option value="">All</option>
          <option value="">Read</option>
          <option value="">Unread</option>
        </select>
      </div>
      <div className="box-mail-counter-header">1-50</div>
    </div>
  )
}
