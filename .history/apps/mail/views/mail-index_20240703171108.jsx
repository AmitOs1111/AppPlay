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
    mailService.save(mail).then(() => loadMails())
  }

  function onRemoveMail(mailId) {
    console.log('delete', mailId)
    mailService.remove(mailId).then(() => loadMails())
  }

  function onSetSelectMail(updateMails) {
    console.log('updateMails:', updateMails)
  }

  return (
    <section className="app-mail">
      <MailHeader />

      <main className="mail-main flex">
        <MailAside />

        <div className="container-content">
          <MailContentTopHeader
            mails={mails}
            onSetSelectMail={onSetSelectMail}
          />
          <MailList
            mails={mails}
            onChangeStatus={onSetChangeStatus}
            onRemoveMail={onRemoveMail}
          />
        </div>
      </main>
    </section>
  )
}
