export function MailTools({ mail, onRemoveMail }) {
  return (
    <section
      className={`mail-tools ${mail.isRead ? 'read' : ''} flex space-around`}
    >
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
