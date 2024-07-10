const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <div className="app-logo">
          <i class="fa-solid fa-shapes"></i>
        </div>
      </Link>
      <nav>
        <NavLink exact to="/">
          <i className="fa-solid fa-house"></i>
          {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/note">Note</NavLink>
        <NavLink to="/mail">Mail</NavLink>
        <NavLink to="/">
          <i className="fa-solid fa-grip"></i>
        </NavLink>
      </nav>
    </header>
  )
}
