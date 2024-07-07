export function MailTools() {
  return (
    <section className="mail-tools flex space-between">
      <img
        src={`../../../assets/img/icon/trash-icon.png`}
        alt=""
        onClick={() => onRemoveMail(mail.id)}
      />

      <img
        src={`../../../assets/img/icon/snoozed-icon.png`}
        alt=""
        onClick={() => console.log('snoozed')}
      />
    </section>
  )
}
