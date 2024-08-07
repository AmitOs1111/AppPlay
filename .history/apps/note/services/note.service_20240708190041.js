import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
  query,
  getById,
  remove,
  save,
  saveMails,
}

const KEY = 'noteListDB'

function query(filterBy) {
  let notes = _loadFromStorage()
  if (!notes) {
    notes = _createNotes()
    _saveToStorage(notes)
  }
  //   if (filterBy) {
  //     let { txt } = filterBy

  //     notes = notes.filter(
  //       (mail) => mail.subject.includes(txt) || mail.body.includes(txt)
  //     )
  //   }

  return Promise.resolve(notes)
}

function getById(mailId) {
  if (!mailId) return Promise.resolve(null)
  const mails = _loadFromStorage()
  const mail = mails.find((mail) => mailId === mail.id)
  return Promise.resolve(mail)
}

// function getNextCarId(carId) {
//   let cars = _loadFromStorage()
//   const carIdx = cars.findIndex((car) => car.id === carId)
//   const nextCarIdx = carIdx + 1 === cars.length ? 0 : carIdx + 1
//   return cars[nextCarIdx].id
// }

function remove(mailId) {
  // return Promise.reject('Not now!!!')
  let mails = _loadFromStorage()
  mails = mails.filter((mail) => mail.id !== mailId)
  _saveToStorage(mails)
  return Promise.resolve()
}

function save(mail) {
  if (mail.id) return _update(mail)
  //   else return _add(mail)
}

function saveMails(updateMails) {
  let mails = _loadFromStorage()
  mails = mails.map((mail, idx) =>
    mail.id === updateMails[idx].id ? updateMails[idx] : mail
  )
  _saveToStorage(mails)
  return Promise.resolve(mails)
}

function save(mail) {
  if (mail.id) return _update(mail)
  //   else return _add(mail)
}

// function _add({ vendor, speed }) {
//   let mails = _loadFromStorage()
//   const car = _createMail(vendor, speed)
//   mails = [car, ...mails]
//   _saveToStorage(mails)
//   return Promise.resolve(car)
// }

function _update(mailToUpdate) {
  let mails = _loadFromStorage()
  mails = mails.map((mail) =>
    mail.id === mailToUpdate.id ? mailToUpdate : mail
  )
  _saveToStorage(mails)
  return Promise.resolve(mailToUpdate)
}

function _createNote(txt = utilService.makeLorem(8)) {
  return {
    id: utilService.makeId(),
    type: 'note-txt',
    isPinned: false,
    info: {
      txt,
      createdAt: Date.now(),
    },
  }
}

function _createNotes() {
  const notes = []
  for (let i = 0; i < 8; i++) {
    notes.push(_createNote())
  }
  return notes
}

function _saveToStorage(notes) {
  storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
