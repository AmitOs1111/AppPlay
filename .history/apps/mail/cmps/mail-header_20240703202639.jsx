import { FilterBySearch } from '../cmps/filter-by-search.jsx'

export function MailHeader({ filterBy }) {
  return (
    <section className="mail-header flex">
      <div className="container-logo-hamburger flex">
        <div className="mail-hamburger">=</div>
        <div className="mail-logo">Gmail</div>
      </div>
      <FilterBySearch filterBy={filterBy} />
      <div className="flex space-between">
        <div className="box-menu">❖</div>
      </div>
    </section>
  )
}
