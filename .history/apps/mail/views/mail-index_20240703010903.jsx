import { MailHeader } from '../cmps/mail-header.jsx'

export function MailIndex() {
  return (
    <section className="app-mail">
      <MailHeader />
      <section className="mail-header">
        <div className="container-logo-hamburger">
          <div className="mail-hamburger">=</div>
          <div className="mail-logo">Gmail</div>
        </div>
        <div className="container-mail-search">
          <div className="mail-search-spotlight">🔎</div>
          <label htmlFor=""></label>
          <input type="text" placeholder="search" />
        </div>
      </section>

      <main className="mail-main">
        <aside className="mail-nav">
          <div className="box-compose">compose</div>
          <ul>
            <li>Inbox</li>
            <li>Starred</li>
            <li>Snoozed</li>
            <li>Important</li>
          </ul>
        </aside>
        <div className="container-content">
          <div className="content-header-top">
            <div className="box-btn-content-header">⃞</div>
            <div className="box-mail-counter-header">1-50</div>
          </div>
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
