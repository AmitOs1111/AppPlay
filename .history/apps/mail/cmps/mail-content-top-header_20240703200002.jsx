import { SelectMail } from '../cmps/select-mail.jsx'

export function MailContentTopHeader({ mails, onSetSelectMail }) {
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
    <section className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <SelectMail />
      </div>
      <div className="box-mail-counter-header">1-50</div>
    </section>
  )
}
