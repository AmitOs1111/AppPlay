const { useState, useEffect } = React

import { eventBusService } from '../services/event-bus.service.js'
eventBusService

export function UserMsg() {
  const [msg, setMsg] = useState({ txt: 'some message', type: '' })
  // const [msg, setMsg] = useState(null)

  useEffect(() => {
    eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      setTimeout(onCloseMsg, 3000)
    })
  }, [])

  function onCloseMsg() {
    setMsg(null)
  }

  if (!msg) return ''
  return (
    <div className={'user-msg flex space-between align-center' + msg.type}>
      <p>{msg.txt}</p>
      <button onClick={() => onCloseMsg()}>x</button>
    </div>
  )
}
