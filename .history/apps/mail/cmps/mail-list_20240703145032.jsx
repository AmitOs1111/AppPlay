import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails,onChangeStatus,onDeleteMail}) {
  if (!mails) return <div>Loading...</div>
  return (
    <section className="mail-list">
      {mails.map((mail) => (
        <article key={mail.id} className="flex">
          <PreviewMail mail={mail} onChangeStatus={onChangeStatus} />

          <div className="box-tools hide">
            <button onClick={()=>onDeleteMail({mail.id})}>x</button>
            <button>t</button>
          </div>
        </article>
      ))}
    </section>
  )
}
