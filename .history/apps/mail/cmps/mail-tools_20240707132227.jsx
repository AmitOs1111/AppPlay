export function MailTools() {
  return (
    <section className="mail-tools flex">
      <button onChange={() => onRemoveMail(mail.id)}>
        <img src={`../../../../assets/img/icon/trash-icon.png`} alt="" />
      </button>
      <button>t</button>
    </section>
  )
}
