import { FilterBySearch } from '../cmps/filter-by-search.jsx'

export function MailHeader({ filterBy, onSetFilterBy }) {
  return (
    <section className="mail-header flex align-center">
      <div className="container-logo-hamburger flex align-center ">
        <div className="mail-hamburger">=</div>
        <div className="mail-logo">Gmail</div>
      </div>
      <FilterBySearch filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      <div className="flex space-between">
        <div className="box-menu">❖</div>
      </div>
    </section>
  )
}
