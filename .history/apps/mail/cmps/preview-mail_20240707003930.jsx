import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function PreviewMail({ mail, onChangeStatus, onSetSelectedMailShow }) {
  function clickedChange(val) {
    console.log('val', val)
    mail[val] = !mail[val]
    onChangeStatus(mail)
  }

  const { subject, body, sentAt, isRead, isImportant, isSelected } = mail
  return (
    <section className="mail-preview flex align-center ">
      <div
        onChange={() => clickedChange('isSelected')}
        className="box box-sign"
      >
        {isSelected ? '☑︎' : '☐'}
      </div>

      <div
        onChange={() => clickedChange('isImportant')}
        className="box box-star"
      >
        {isImportant ? '✩' : '★'}
      </div>

      <div className="box box-important">▶︎</div>
      <div className="mail-content-text">
        <div
          onChange={() => {
            clickedChange('isRead')
            onSetSelectedMailShow(mail.id)
          }}
          className="box-mail-subject"
        >
          {<LongTxt txt={subject} length={15} />}
        </div>
        <div
          onChange={() => {
            clickedChange('isRead')
            onSetSelectedMailShow(mail.id)
          }}
          className="box-mail-body"
        >
          {<LongTxt txt={body} length={170} />}
        </div>
      </div>
      <div className="box  box-empty"></div>
      <div className="box-created-time">
        {utilService.getFormateTime(sentAt)}
      </div>
    </section>
  )
}
