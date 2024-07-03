import { PreviewMail } from '../cmps/preview-mail.jsx'

export function MailList({ mails }) {
  console.log('mails', mails)
  return (
    <section className="mail-list">
      <ul className="clean-list">
        <PreviewMail />
      </ul>
    </section>
  )
}
