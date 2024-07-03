export function MailAside() {
  const filterNames = [
    'inbox',
    'starred',
    'snoozed',
    'important',
    'sent',
    'draft',
  ]

  return (
    <aside className="mail-aside">
      <div className="box-compose">compose</div>
      {filterNames.map((name) => (
        <article key={name}>
          <div className="box-icon">
            {/* <img src={`../../../assets/img/icon/${name}-icon.png`} alt="" /> */}
          </div>
          <div className="box-filter-aside">
            {/* <div className="filter-by">{`${name}`}</div> */}
            <div className="filter-by-count">5</div>
          </div>
        </article>
      ))}
    </aside>
  )
}
