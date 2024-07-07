export function MailTools() {
  return (
    <section className="mail-tools flex">
      <img src={`../../../assets/img/icon/compose-icon.png`} alt="" />
      <button onChange={() => onRemoveMail(mail.id)}></button>
      <button>
        <img src={`..`} alt="" />
      </button>
    </section>
  )
}
