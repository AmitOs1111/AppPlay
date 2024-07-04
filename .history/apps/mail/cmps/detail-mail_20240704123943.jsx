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

  if (!detailsMail) return <section>Loading...</section>

  return <section className="details-mail">details-mail</section>
}
