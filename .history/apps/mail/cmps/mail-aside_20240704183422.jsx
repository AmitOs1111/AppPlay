const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailAside({ openCompose }) {
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
        onClick={() => openCompose()}
        className="box-compose flex align-center"
      >
        <img
          className="box-icon"
          src={`../../../assets/img/icon/compose-icon.png`}
          alt=""
        />
        <h3>Compose</h3>
      </div>
      {filterNames.map((name) => (
        <Link to={`/mail/${name}`} key={name} className="flex ">
          <div className="box-icon">
            <img src={`../../../assets/img/icon/${name}-icon.png`} alt="" />
          </div>
          <div className="box-filter-aside flex space-between">
            <div className="filter-by">{`${name}`}</div>
            <div className="filter-by-count">5</div>
          </div>
        </Link>
      ))}
    </aside>
  )
}
