export function MailTools() {
  return (
    <section className="mail-tools flex">
      <img
        src={`../../../assets/img/icon/trash-icon.png`}
        alt=""
        onClick={() => onRemoveMail(mail.id)}
      />

      <button>
        <img src={`..`} alt="" />
      </button>
    </section>
  )
}
