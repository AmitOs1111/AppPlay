const { useState, useEffect } = React

import { eventBusService } from '../services/event-bus.service.js'
eventBusService

export function UserMsg() {
  const [msg, setMsg] = useState({
    txt: 'some Message',
    type: 'success',
  })

  useEffect(() => {
    eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      setTimeout(setMsg(null), 3000)
    })
  }, [])

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