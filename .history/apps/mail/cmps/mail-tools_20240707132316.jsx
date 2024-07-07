export function MailTools() {
  return (
    <section className="mail-tools flex">
      <button onChange={() => onRemoveMail(mail.id)}>
        <img src={`../../../assets/img/icon/compose-icon.png`} alt="" />
      </button>
      <button>
        <img src={`../`} alt="" />
      </button>
    </section>
  )
}
