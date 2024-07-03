const { useState } = React

export function FilterBySearch() {
  return (
    <div className="container-mail-search flex">
      <div className="mail-search-spotlight">🔎</div>
      <label htmlFor=""></label>
      <input type="text" placeholder="search" />
    </div>
  )
}
