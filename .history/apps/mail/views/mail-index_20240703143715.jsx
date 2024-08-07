const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { utilService } from '../../../services/util.service.js'

import { MailHeader } from '../cmps/mail-header.jsx'
import { MailAside } from '../cmps/mail-aside.jsx'
import { MailContentTopHeader } from '../cmps/mail-content-top-header.jsx'
import { MailList } from '../cmps/mail-list.jsx'

export function MailIndex() {
  const [mails, setMails] = useState(null)

  useEffect(() => {
    console.log('Mounted email app')
    loadMails()
  }, [])

  function loadMails() {
    mailService.query().then((mails) => setMails(mails))
  }

  function onSetChangeStatus(mail) {
    console.log('mail:', mail)
    mailService.save().then(() => loadMails())
  }

  return (
    <section className="app-mail">
      <MailHeader />

      <main className="mail-main flex">
        <MailAside />

        <div className="container-content">
          <MailContentTopHeader />
          <MailList mails={mails} onChangeStatus={onSetChangeStatus} />
        </div>
      </main>
    </section>
  )
}
