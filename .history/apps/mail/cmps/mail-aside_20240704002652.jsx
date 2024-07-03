const { Link } = ReactRouterDOM

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
      <div className="box-compose flex">
        <img src={`../../../assets/img/icon/compose-icon.png`} alt="" />
        <h3>Compose</h3>
      </div>
      {filterNames.map((name) => (
        <Link to={`/mail/${name}`} key={name} className="flex">
          <div className="box-icon">
            <img src={`../../../assets/img/icon/${name}-icon.png`} alt="" />
          </div>
          <div className="box-filter-aside flex">
            <div className="filter-by">{`${name}`}</div>
            <div className="filter-by-count">5</div>
          </div>
        </Link>
      ))}
    </aside>
  )
}
