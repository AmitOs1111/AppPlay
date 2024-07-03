export function SelectMail({ mails, onSetSelectMail }) {
  function onSelectMail({ target }) {
    mails.forEach((mail) => {
      if (target.value === 'all') mail.isSelected = true
      else if (target.value === 'none') mail.isSelected = false
      else if (target.value === 'read')
        mail.isSelected = mail.isRead ? true : false
      else if (target.value === 'unread')
        mail.isSelected = mail.isRead ? false : true
    })
    onSetSelectMail(mails)
  }
  return (
    <select name="" id="" onChange={onSelectMail}>
      <option value="">☐</option>
      <option value="all">All</option>
      <option value="read">Read</option>
      <option value="unread">Unread</option>
      <option value="none">none</option>
    </select>
  )
}
