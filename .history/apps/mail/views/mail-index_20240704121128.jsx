const { useState, useEffect } = React
// const { useParams } = ReactRouterDOM
import { useParams } from 'react-router-dom'

import { mailService } from '../services/mail.service.js'
import { utilService } from '../../../services/util.service.js'

import { MailHeader } from '../cmps/mail-header.jsx'
import { MailAside } from '../cmps/mail-aside.jsx'
import { MailContentTopHeader } from '../cmps/mail-content-top-header.jsx'
import { MailList } from '../cmps/mail-list.jsx'

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState({ txt: '' })
  const { userId } = useParams()

  useEffect(() => {
    console.log('Mounted email app')
    // console.log('useParams', useParams())
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

  if (!mails) return <section>Loding...</section>
  return (
    <section className="app-mail">
      <MailHeader filterBy={filterBy} onSetFilterBy={onSetFilterBy} />

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
          {/* <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
          </div> */}
        </div>
      </main>
    </section>
  )
}
