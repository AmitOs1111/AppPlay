const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

export function DetailsMail({ onSetSelectedMailShow, selectedMail }) {
  const [detailsMail, setDetailsMail] = useState(null)
  useEffect(() => {
    loadMail(selectedMail)
  }, [])

  function loadMail(mailId) {
    mailService.getById(mailId).then((mail) => setDetailsMail(mail))
  }

  function getFormatDetailsDate() {
    return '123'
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
