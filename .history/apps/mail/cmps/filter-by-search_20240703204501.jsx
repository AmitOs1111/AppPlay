const { useState, useEffect } = React

export function FilterBySearch({ onSetFilterBy }) {
  const [filterBySearch, setFilterBySearch] = useState({ txt: '' })

  useEffect(() => {
    onSetFilterBy(filterBySearch)
  }, [filterBySearch])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    setFilterBySearch((prevFilterBySearch) => ({
      ...prevFilterBySearch,
      [field]: value,
    }))
  }

  return (
    <div className="container-mail-search flex">
      <div className="mail-search-spotlight">🔎</div>
      <label htmlFor="search"></label>
      <input
        onChange={handleChange}
        value={filterBySearch.txt}
        type="text"
        name="txt"
        id="search"
        placeholder="search"
      />
    </div>
  )
}
