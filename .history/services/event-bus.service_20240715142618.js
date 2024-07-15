function createEventEmitter() {
  const listenersMap = {}
  // Trick for DEBUG
  //   window.mapmap = listenersMap
  return {
    on(evName, listener) {
      listenersMap[evName] = listenersMap[evName]
        ? [...listenersMap[evName], listener]
        : [listener]
      return () => {
        listenersMap[evName] = listenersMap[evName].filter(
          (func) => func !== listener
        )
      }
    },
    emit(evName, data) {
      if (!listenersMap[evName]) return
      listenersMap[evName].forEach((listener) => listener(data))
    },
  }
}

export const eventBusService = createEventEmitter()

// -----------------------------------------------//

export function showUserMsg(msg) {
  eventBusService.emit('show-user-msg', msg)
}

export function showSuccessMsg(txt) {
  console.log('showSuccessMsg', txt)
  showUserMsg({ txt, type: 'success' })
}

export function showErrorMsg(txt) {
  showUserMsg({ txt, type: 'error' })
}

// Service Testing:
// eventBusService.on('', (data) => {
//   console.log('Got Muk with data:', data)
// })
// eventBusService.on('muk', console.log)
// eventBusService.on('puk', (level) => {
//   console.log('Got puk with level:', level)
// })
// const unsubscribe = eventBusService.on('puk', (data) => {
//   console.log('Mee too:', data)
// })

// setTimeout(()=>{
//     unsubscribe()
// }, 2000)

// eventBusService.emit('muk', 'muk:' + 100)
// eventBusService.emit('puk', 10)

// setTimeout(()=>{
//     eventBusService.emit('muk', 'Buuuu!')
//     eventBusService.emit('puk', 3)
// }, 3000)
