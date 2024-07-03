import { SelectMail } from '../cmps/select-mail.jsx'

export function MailContentTopHeader({ mails, onSetSelectMail }) {
  function getMailCount() {
    return `1-${mails.length > 50 ? 50 : mails.length}`
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
