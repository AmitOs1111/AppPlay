const { useState } = React

export function FilterBySearch({ filterBy }) {
  const [filterBySearch, setFilterBySearch] = useState({ txt: '' })

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(
      (prevState) => ({
        filterBy: {
          ...prevState.filterBy,
          [field]: value,
        },
      }),
      () => {
        this.props.onSetFilter(this.state.filterBy)
      }
    )
  }

  return (
    <div className="container-mail-search flex">
      <div className="mail-search-spotlight">🔎</div>
      <label htmlFor="search"></label>
      <input
        value={filterBySearch.txt}
        type="text"
        name="txt"
        id="search"
        placeholder="search"
      />
    </div>
  )
}
