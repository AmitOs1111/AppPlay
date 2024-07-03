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
            src="image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAYElEQVR4AWMY4YBFzqueRc7zPykYpAengWAFsp77WeQ8GojBILUgPXgNBCkk1kcgtUPRwFED0TGDgIMAXIGEhwK6PMkGMst6zQcZBDIYxKbQQEw8rAxExBqxGJ4qRjYAANkUq1P+3kr2AAAAAElFTkSuQmCC"
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
