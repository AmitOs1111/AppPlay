const { useState, useEffect } = React

export function DetailsMail({ onSetSelectedMailShow, selectedMail }) {
  useEffect(() => {
    console.log('heloo details', selectedMail)
  }, [])

  return <section className="details-mail">details-mail</section>
}
