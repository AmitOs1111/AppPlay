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
      <i className="fa-regular fa-clock"></i>
      {/* <img
        src={`../../../assets/img/icon/snoozed-icon.png`}
        alt=""
        onClick={() => console.log('snoozed')}
      /> */}
      {mail.isRead ? (
        <i className="fa-regular fa-envelope-open"></i>
      ) : (
        <i className="fa-regular fa-envelope"></i>
      )}
    </section>
  )
}
