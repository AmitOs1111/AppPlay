import { LongTxt } from '../../../cmps/long-txt.jsx'

export function PreviewMail({ mail }) {
  const { subject, body, sentAt, isRead } = mail
  return (
    <section className="preview-mail flex">
      <div className="box-sign">⃞</div>
      <div className="box-star">⭐️</div>
      <div className="box-important">▶︎</div>
      <div className="box-mail-subject">
        {<LongTxt txt={subject} length={30} />}
      </div>
      <div className="box-mail-body">{<LongTxt txt={body} />}</div>
      <div className="box-empty"></div>
      <div className="box-created-time">{sentAt}</div>
    </section>
  )
}
