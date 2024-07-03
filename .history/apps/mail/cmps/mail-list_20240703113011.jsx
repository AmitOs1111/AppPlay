import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails }) {
  console.log('mails', mails)
  return (
    <section className="mail-list">
      {mails.map((mail) => {
        <PreviewMail mail={mail} />
       <div className="box-tools">
        <button>x</button>
        <button>t</button>
       </div> 
      })}
    </section>
  )
}
