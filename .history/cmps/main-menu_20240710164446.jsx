const { Link, NavLink, withRouter } = ReactRouterDOM
const { useState } = React
export function MainMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <section className="main-menu">
      <button
        className="btn-main-menu"
        onClickCapture={() =>
          setToggleMenu((prevToggleMenu) => !prevToggleMenu)
        }
      >
        <i className="fa-solid fa-grip"></i>
      </button>
      {toggleMenu && (
        <nav className="nav-main-menu">
          <NavLink exact to="/">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/note">
            <img src="../assets/img/icon/keep-icon.png" alt="" />
          </NavLink>
          <NavLink to="/mail">
            <img src="../assets/img/icon/logo-mail.png" alt="" />
          </NavLink>
        </nav>
      )}
    </section>
  )
}
