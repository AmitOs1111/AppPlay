import { PreviewMail } from '../cmps/preview-mail.jsx'
import { LoadingMail } from '../cmps/mail-loading.jsx'
import { MailTools } from '../cmps/mail-tools.jsx'

export function MailList({
  mails,
  onChangeStatus,
  onRemoveMail,
  onSetSelectedMailShow,
}) {
  function getClassNameMail(mail) {
    if (mail.isSelected) return 'bg-selected-mail'
    if (mail.isRead) return 'bg-read-mail'
  }

  if (!mails) return <LoadingMail />
  return (
    <section className="mail-list">
      {mails.map((mail) => (
        <article key={mail.id} className={`${getClassNameMail(mail)} flex `}>
          <PreviewMail
            mail={mail}
            onChangeStatus={onChangeStatus}
            onSetSelectedMailShow={onSetSelectedMailShow}
          />
          <MailTools />
        </article>
      ))}
    </section>
  )
}
