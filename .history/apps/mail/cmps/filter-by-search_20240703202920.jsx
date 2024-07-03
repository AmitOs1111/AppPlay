const { useState } = React

export function FilterBySearch({ filterBy }) {
  const [filterBySearch, setFilterBySearch] = useState({ txt: '' })
  return (
    <div className="container-mail-search flex">
      <div className="mail-search-spotlight">🔎</div>
      <label htmlFor=""></label>
      <input value={filterBySearch.txt} type="text" placeholder="search" />
    </div>
  )
}
