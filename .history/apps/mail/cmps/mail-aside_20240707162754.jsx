const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailAside({ onToggleCompose }) {
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
      <div
        className="box-compose flex align-center"
        onClick={() => onToggleCompose()}
      >
        <img
          className="box-icon"
          src={`../../../assets/img/icon/compose-icon.png`}
          alt=""
        />
        <h3>Compose</h3>
      </div>

      {filterNames.map((name) => (
        <Link
          to={`/mail/${name}`}
          key={name}
          className="aside-filter flex align-center"
        >
          <div className="box-icon">
            <img src={`../../../assets/img/icon/${name}-icon.png`} alt="" />
          </div>
          <div className="aside-filter-names flex space-between">
            <div className="filter-by">{`${name}`}</div>
            <div className="filter-by-count">5</div>
          </div>
        </Link>
      ))}
    </aside>
  )
}
