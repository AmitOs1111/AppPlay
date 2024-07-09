import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
  query,
  getById,
  remove,
  save,
}

const KEY = 'appNoteDB'

function query(filterBy) {
  let appNote = _loadFromStorage()
  console.log('appNote:', appNote)
  if (!appNote) {
    const notes = _createNotes()
    appNote = { notes, trashes: [] }
    _saveToStorage(appNote)
  }
  //   if (filterBy) {
  //     let { txt } = filterBy

  //     notes = notes.filter(
  //       (mail) => mail.subject.includes(txt) || mail.body.includes(txt)
  //     )
  //   }

  return Promise.resolve(appNote)
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

function remove(noteId) {
  // return Promise.reject('Not now!!!')
  let appNote = _loadFromStorage()
  console.log('appNote', appNote)
  let { notes } = appNote
  notes = notes.filter((note) => note.id !== noteId)
  console.log('appNote', appNote)
  _saveToStorage(appNote)
  return Promise.resolve()
}

function save(note) {
  if (note.id) return _update(note)
  else return _add(note)
}

function _add({ title, txt }) {
  let appNote = _loadFromStorage()
  let { notes } = appNote
  const note = _createNote(title, txt)
  let newNotes = [note, ...notes]
  appNote.notes = newNotes
  _saveToStorage(appNote)
  return Promise.resolve(note)
}

function _update(mailToUpdate) {
  let mails = _loadFromStorage()
  mails = mails.map((mail) =>
    mail.id === mailToUpdate.id ? mailToUpdate : mail
  )
  _saveToStorage(mails)
  return Promise.resolve(mailToUpdate)
}

function _createNote(
  title = utilService.makeLorem(5),
  txt = utilService.makeLorem(8)
) {
  return {
    id: utilService.makeId(),
    type: 'note-txt',
    isPinned: false,
    info: {
      title,
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
