import { SelectMail } from '../cmps/select-mail.jsx'

export function MailContentTopHeader({ mails, onSetSelectMail }) {
  return (
    <section className="content-top-header flex space-between">
      <div className="box-btn-content-header">
        <SelectMail mails={mails} onSetSelectMail={onSetSelectMail} />
      </div>
      <div className="box-mail-counter-header">{`1-${
        mails.length > 50 ? 50 : mails.length
      }`}</div>
    </section>
  )
}
