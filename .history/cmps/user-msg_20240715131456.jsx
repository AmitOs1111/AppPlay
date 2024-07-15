const { useState, useEffect } = React

import { eventBusService } from '../services/event-bus.service.js'
eventBusService

export function UserMsg() {
  const [msg, setMsg] = useState({
    txt: 'some Message',
    type: 'success',
  })

  useEffect(() => {}, [])

  function onCloseMsg() {
    setMsg(null)
  }

  if (!msg) return ''
  return (
    <div className={'user-msg ' + msg.type}>
      <p>{msg.txt}</p>
      <button onClick={() => onCloseMsg()}>x</button>
    </div>
  )
}
