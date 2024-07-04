const { useState, useEffect } = React
// const { useParams } = ReactRouterDOM
// import { useParams } from 'react-router-dom'

import { mailService } from '../services/mail.service.js'
import { utilService } from '../../../services/util.service.js'

import { MailHeader } from '../cmps/mail-header.jsx'
import { MailAside } from '../cmps/mail-aside.jsx'
import { MailContentTopHeader } from '../cmps/mail-content-top-header.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { DetailsMail } from '../cmps/detail-mail.jsx'
import { ComposeMail } from '../cmps/detail-mail.jsx'

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState({ txt: '' })
  const [selectedMail, setSelectedMail] = useState(null)

  useEffect(() => {
    console.log('Mounted email app')
    loadMails()
  }, [])

  useEffect(() => {
    loadMails(filterBy)
  }, [filterBy])

  function loadMails(filterBy) {
    mailService.query(filterBy).then((mails) => setMails(mails))
  }

  function onSetChangeStatus(mail) {
    mailService.save(mail).then(() => loadMails())
  }

  function onRemoveMail(mailId) {
    mailService.remove(mailId).then(() => loadMails())
  }

  function onSetSelectMail(updateMails) {
    mailService.saveMails(updateMails).then(() => loadMails())
  }

  function onSetFilterBy(filterByUpdate) {
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      ...filterByUpdate,
    }))
  }

  function onSetSelectedMailShow(mail) {
    console.log('mail', mail)
    setSelectedMail(mail)
  }

  if (!mails) return <section>Loding...</section>
  return (
    <section className="app-mail">
      <MailHeader filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      <main className="mail-main flex">
        <MailAside />
        {!selectedMail && (
          <div className="container-content">
            <MailContentTopHeader
              mails={mails}
              onSetSelectMail={onSetSelectMail}
            />
            <MailList
              mails={mails}
              onChangeStatus={onSetChangeStatus}
              onRemoveMail={onRemoveMail}
              onSetSelectedMailShow={onSetSelectedMailShow}
            />
          </div>
        )}
        {selectedMail && (
          <DetailsMail
            onSetSelectedMailShow={onSetSelectedMailShow}
            selectedMail={selectedMail}
          />
        )}
      </main>
      <ComposeMail />
    </section>
  )
}
