import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails }) {
  console.log('mails', mails)

  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-list">
      {mails.map((mail) => (
        <article key={mail.id}>
          <PreviewMail mail={mail} />

          <div className="box-tools">
            <button>x</button>
            <button>t</button>
          </div>
        </article>
      ))}
    </section>
  )
}
