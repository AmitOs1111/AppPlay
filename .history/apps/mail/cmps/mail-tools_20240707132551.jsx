export function MailTools() {
  return (
    <section className="mail-tools flex">
      <img
        src={`../../../assets/img/icon/trash-icon.png`}
        alt=""
        onClick={() => onRemoveMail(mail.id)}
      />

      <img
        src={`../../../assets/img/icon/snooze-icon.png`}
        alt=""
        onClick={() => onRemoveMail(mail.id)}
      />
    </section>
  )
}
