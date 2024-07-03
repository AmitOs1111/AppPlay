import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails, onChangeStatus, onRemoveMail }) {
  function getClassNameMail(mail) {
    if (mail.isSelected) return 'bg-selected-mail'
    if (mail.isRead) return 'bg-read-mail'
  }

  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-list">
      {mails.map((mail) => (
        <article key={mail.id} className={`${getClassNameMail(mail)} flex `}>
          <PreviewMail mail={mail} onChangeStatus={onChangeStatus} />

          <div className="box-tools flex">
            <button onClick={() => onRemoveMail(mail.id)}>x</button>
            <button>t</button>
          </div>
        </article>
      ))}
    </section>
  )
}
