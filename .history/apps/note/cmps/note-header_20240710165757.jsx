const { Link, NavLink, withRouter } = ReactRouterDOM

import { MainMenu } from '../cmps/main-menu.jsx'

export function NoteHeader() {
  return (
    <header className="note-header full main-layout ">
      <div className="header-content flex space-between align-center">
        <div className="note-logo">
          <img src="../../../assets/img/icon/keep-icon.png" alt="" />
        </div>
        <div className="main-search-container flex">
          <div className="spotlight">
            <i className="fa-brands fa-sistrix"></i>
          </div>
          <input type="text" placeholder="Search" />
        </div>

        {/* <NavLink to="/">
          <i className="fa-solid fa-grip"></i>
        </NavLink> */}
        <MainMenu />
      </div>
    </header>
  )
}
