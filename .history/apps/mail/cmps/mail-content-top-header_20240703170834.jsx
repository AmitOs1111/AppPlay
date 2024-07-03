export function MailContentTopHeader({ mails }) {
  function onSelectMail({ target }) {
    console.log('val', target.value)
    mails.forEach((mail) => {
      if (target.value === 'all') mail.isSelected = true
      if (target.value === 'none') mail.isSelected = false
      if (target.value === 'read') mail.isSelected = mail.isRead ? true : false
      if (target.value === 'unread')
        mail.isSelected = mail.isRead ? false : true
    })
  }

  return (
    <section className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <select name="" id="" onChange={onSelectMail}>
          <option value="">☐</option>
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
