export function MailHeader() {
  return (
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
  )
}
