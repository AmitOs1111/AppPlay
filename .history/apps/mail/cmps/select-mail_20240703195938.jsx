export function SelectMail() {
  return (
    <select name="" id="" onChange={onSelectMail}>
      <option value="">☐</option>
      <option value="all">All</option>
      <option value="read">Read</option>
      <option value="unread">Unread</option>
      <option value="none">none</option>
    </select>
  )
}
