const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <h3>LOGO!</h3>
      </Link>
      <nav>
        <NavLink exact to="/">
          Home
          <i className="fa-solid fa-house"></i>
          {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/note">Note</NavLink>
        <NavLink to="/mail">Mail</NavLink>
        <NavLink to="/">❖</NavLink>
      </nav>
    </header>
  )
}
