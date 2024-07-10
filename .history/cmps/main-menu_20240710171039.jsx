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
          <NavLink className="btn-menu" exact to="/">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink className="btn-menu" to="/about">
            About
          </NavLink>
          <NavLink
            className="btn-menu"
            to="/note"
            onClick={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
          >
            <img src="../assets/img/icon/keep-icon.png" alt="" />
          </NavLink>
          <NavLink
            className="btn-menu"
            to="/mail"
            onClick={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
          >
            {/* <img src="../assets/img/icon/logo-mail.png" alt="" /> */}
            <i className="fa-regular fa-envelope"></i>
          </NavLink>
        </nav>
      )}
    </section>
  )
}
