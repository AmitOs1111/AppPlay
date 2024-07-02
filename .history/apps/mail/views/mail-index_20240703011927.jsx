import { MailHeader } from '../cmps/mail-header.jsx'
import { MailAside } from '../cmps/mail-aside.jsx'
import { MailContentTopHeader } from '../cmps/mail-content-top-header.jsx'

export function MailIndex() {
  return (
    <section className="app-mail">
      <MailHeader />

      <main className="mail-main">
        <MailAside />

        <div className="container-content">
          <MailContentTopHeader />

          <ul>
            <li>
              <div className="box-sign">⃞</div>
              <div className="box-star">⭐️</div>
              <div className="box-important">▶︎</div>
              <div className="box-mail-title">GitHab</div>
              <div className="box-mail-content">
                A first-party GitHub OAuth application has been added to your
                account
              </div>
              <div className="box-empty"></div>
              <div className="box-created-time">11:56pm</div>
            </li>
            <li>
              <div className="box-sign">⃞</div>
              <div className="box-star">⭐️</div>
              <div className="box-important">▶︎</div>
              <div className="box-mail-title">GitHab</div>
              <div className="box-mail-content">
                A first-party GitHub OAuth application has been added to your
                account
              </div>
              <div className="box-empty"></div>
              <div className="box-created-time">11:56pm</div>
            </li>
          </ul>
        </div>
      </main>
    </section>
  )
}
