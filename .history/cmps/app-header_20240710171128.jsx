const { Link, NavLink, withRouter } = ReactRouterDOM

import { MainMenu } from '../cmps/main-menu.jsx'

export function AppHeader() {
  return (
    <header className="app-header ">
      <Link to="/">
        <div className="app-logo">
          <i className="fa-solid fa-shapes"></i>
        </div>
      </Link>

      <MainMenu />
    </header>
  )
}
