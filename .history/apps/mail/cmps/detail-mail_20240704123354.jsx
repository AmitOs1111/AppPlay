const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

export function DetailsMail({ onSetSelectedMailShow, selectedMail }) {
  useEffect(() => {
    loadMail(selectedMail)
  }, [])

  function loadMail(mailId){
    mailService.getById(mailId).then((mail)=>console.log('back from service:'mail);)
  }

  return <section className="details-mail">details-mail</section>
}
