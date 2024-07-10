export function MainMenu() {
  return (
    <section className="main-menu">
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
    </section>
  )
}
