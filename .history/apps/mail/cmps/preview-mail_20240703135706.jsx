import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function PreviewMail({ mail }) {
  const { subject, body, sentAt, isRead,isImportant } = mail
  return (
    <section className="preview-mail flex">
      <div className="box-sign">{isRead?☑︎:☐}</div>
      <div className="box-star">{isImportant?✩☆★}</div>
      <div className="box-important">▶︎</div>
      <div className="box-mail-subject">
        {<LongTxt txt={subject} length={30} />}
      </div>
      <div className="box-mail-body">{<LongTxt txt={body} />}</div>
      <div className="box-empty"></div>
      <div className="box-created-time">
        {utilService.getFormateTime(sentAt)}
      </div>
    </section>
  )
}
