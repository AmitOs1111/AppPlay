const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { utilService } from '../../../services/util.service.js'

export function DetailsMail({ onSetSelectedMailShow, selectedMail }) {
  const [detailsMail, setDetailsMail] = useState(null)
  useEffect(() => {
    loadMail(selectedMail)
  }, [])

  function loadMail(mailId) {
    mailService.getById(mailId).then((mail) => setDetailsMail(mail))
  }

  function getFormatDetailsDate(createdAt) {
    const date = new Date(createdAt)
    const year = date.getFullYear()
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const hours = utilService.padNum(date.getHours())
    const minutes = utilService.padNum(date.getMinutes())
    const ampm = date.getHours() > 12 ? 'PM' : 'AM'

    return `${month} ${day},${year}, ${hours}:${minutes}${ampm}`
  }

  if (!detailsMail) return <section>Loading...</section>

  return (
    <section className="details-mail">
      <h2>{detailsMail.subject}</h2>
      <h4>{getFormatDetailsDate(detailsMail.sentAt)}</h4>
      <p>{detailsMail.body}</p>
    </section>
  )
}
