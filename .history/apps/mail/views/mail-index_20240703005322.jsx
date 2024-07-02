export function MailIndex() {
  return (
    <section className="app-mail">
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
            <div className="box-btn-content-header">⃞▢</div>
          </div>
        </div>
      </main>
    </section>
  )
}
