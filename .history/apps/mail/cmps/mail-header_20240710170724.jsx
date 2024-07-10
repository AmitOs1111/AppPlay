import { FilterBySearch } from '../cmps/filter-by-search.jsx'

// import { MainMenu } from '../cmps/main-menu.jsx'
import { MainMenu } from '../../../cmps/main-menu.jsx'

export function MailHeader({ filterBy, onSetFilterBy }) {
  return (
    <section className="mail-header flex align-center">
      <div className="container-logo-hamburger flex align-center ">
        {/* <div className="mail-hamburger">=</div> */}
        <div className="mail-logo">
          <img src={`../../../assets/img/icon/logo-mail.png`} alt="" />
        </div>
      </div>
      <div className="container-search-menu flex align-center">
        <FilterBySearch filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
        <div className="box-menu">
          <MainMenu />
        </div>
      </div>
    </section>
  )
}
