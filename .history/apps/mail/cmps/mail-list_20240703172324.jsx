import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails, onChangeStatus, onRemoveMail }) {
  function getClassNameMail(mail) {
    let className = ''
    if (mail.isSelected) className = 'bg-selected-mail'
    if (mail.isRead) className = 'bg-read-mail'
    console.log('className=', className)
    return className
  }

  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-list">
      {mails.map((mail) => (
        <article key={mail.id} className={`${getClassNameMail(mail)} flex`}>
          <PreviewMail mail={mail} onChangeStatus={onChangeStatus} />

          <div className="box-tools hide">
            <button onClick={() => onRemoveMail(mail.id)}>x</button>
            <button>t</button>
          </div>
        </article>
      ))}
    </section>
  )
}