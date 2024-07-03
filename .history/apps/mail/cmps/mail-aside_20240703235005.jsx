export function MailAside() {
  return (
    <aside className="mail-aside">
      <div className="box-compose">compose</div>
      <article>
        <div className="box-icon">◼︎</div>
        <div className="box-filter-aside">
          <div className="filter-by"></div>
          <div className="filter-by-count">5</div>
        </div>
      </article>
      <ul className="">
        <li>
          <img
            src="/ui/v1/icons/mail/gm3/1x/inbox_fill_baseline_p900_20dp.png"
            alt=""
          />
          Inbox
        </li>
        <li>Starred</li>
        <li>Snoozed</li>
        <li>Important</li>
      </ul>
    </aside>
  )
}
