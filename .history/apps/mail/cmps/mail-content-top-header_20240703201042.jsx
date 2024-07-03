import { SelectMail } from '../cmps/select-mail.jsx'

export function MailContentTopHeader({ mails, onSetSelectMail }) {
  function getMailCount() {
    const count = mails.length
    return `1-${count > 50 ? 50 : count}`
  }

  return (
    <section className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <SelectMail mails={mails} onSetSelectMail={onSetSelectMail} />
      </div>
      <div className="box-mail-counter-header">{getMailCount()}</div>
    </section>
  )
}
