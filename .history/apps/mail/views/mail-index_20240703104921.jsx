const { useState, useEffect } = React

import { MailHeader } from '../cmps/mail-header.jsx'
import { MailAside } from '../cmps/mail-aside.jsx'
import { MailContentTopHeader } from '../cmps/mail-content-top-header.jsx'
import { MailList } from '../cmps/mail-list.jsx'

import { mailService } from '../services/mail.service.js'

export function MailIndex() {
  useEffect(() => {
    console.log('Mounted email app')
  }, [])

  return (
    <section className="app-mail">
      <MailHeader />

      <main className="mail-main flex">
        <MailAside />

        <div className="container-content">
          <MailContentTopHeader />
          <MailList />
        </div>
      </main>
    </section>
  )
}
