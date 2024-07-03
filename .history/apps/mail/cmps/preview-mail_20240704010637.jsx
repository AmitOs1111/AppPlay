import { LongTxt } from '../../../cmps/long-txt.jsx'
import { utilService } from '../../../services/util.service.js'

export function PreviewMail({ mail, onChangeStatus }) {
  function clickedChange(val) {
    console.log('val', val)
    mail[val] = !mail[val]
    onChangeStatus(mail)
  }

  const { subject, body, sentAt, isRead, isImportant, isSelected } = mail
  return (
    <section className="mail-preview flex align-center ">
      <div onClick={() => clickedChange('isSelected')} className="box box-sign">
        {isSelected ? '☑︎' : '☐'}
      </div>
      <div
        onClick={() => clickedChange('isImportant')}
        className="box box-star"
      >
        {isImportant ? '✩' : '★'}
      </div>
      <div className="box box-important">▶︎</div>
      <div onClick={() => clickedChange('isRead')} className="box-mail-subject">
        {<LongTxt txt={subject} length={30} />}
      </div>
      <div onClick={() => clickedChange('isRead')} className="box-mail-body">
        {<LongTxt txt={body} />}
      </div>
      <div className="box-empty"></div>
      <div className="box-created-time">
        {utilService.getFormateTime(sentAt)}
      </div>
    </section>
  )
}
