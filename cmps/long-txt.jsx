export function LongTxt({ txt, length = 100 }) {
  function getTxt(txt) {
    if (txt.length > length) return txt.substring(0, length) + '...'
    else return txt
  }
  return <section className="long-txt">{getTxt(txt)}</section>
}
