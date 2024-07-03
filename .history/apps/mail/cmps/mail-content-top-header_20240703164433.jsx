export function MailContentTopHeader() {
  return (
    <div className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <label htmlFor="check-selected-mail"></label>
        <input type="checkbox" id="check-selected-mail" />
      </div>
      <div className="box-mail-counter-header">1-50</div>
    </div>
  )
}
