export function LongTxt({ txt }) {
  function getTxt(txt) {
    console.log('txt:', txt)
  }
  return <section className="long-txt">{getTxt(txt)}</section>
}
