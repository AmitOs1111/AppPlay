export function MailTools() {
  return (
    <section className="mail-tools flex">
      <button onChange={() => onRemoveMail(mail.id)}>x</button>
      <button>t</button>
    </section>
  )
}
