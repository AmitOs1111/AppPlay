import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function PreviewMail({ mail, onChangeStatus }) {
  function clickedChangeRead(ev, val) {
    ev.stopPropagation()
    onChangeStatus(mail.id, val)
  }
  function clickedChangeImportant(ev, val) {
    ev.stopPropagation()
    onChangeStatus(mail.id, val)
  }

  const { subject, body, sentAt, isRead, isImportant } = mail
  return (
    <section
      onClick={() => clickedChangeRead(event, 'isRead')}
      className="preview-mail flex"
    >
      <div
        onClick={() => clickedChangeRead(event, 'isRead')}
        className="box-sign"
      >
        {isRead ? '☑︎' : '☐'}
      </div>
      <div
        onClick={() => clickedChangeImportant(event, 'isImportant')}
        className="box-star"
      >
        {isImportant ? '✩' : '★'}
      </div>
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
