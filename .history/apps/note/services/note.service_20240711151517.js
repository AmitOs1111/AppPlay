import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
  query,
  getById,
  remove,
  save,
  getEmptyNote,
}

const KEY = 'appNoteDB'

function query(filterBy) {
  let appNote = _loadFromStorage()
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
  let { notes } = appNote
  let newNotes = notes.filter((note) => note.id !== noteId)
  appNote.notes = newNotes
  _saveToStorage(appNote)
  return Promise.resolve()
}

function save(note) {
  if (note.id) return _update(note)
  else return _add(note)
}

function _add(noteToEdit) {
  let { type } = noteToEdit
  let { title, txt, todos, src } = noteToEdit.info
  let appNote = _loadFromStorage()
  let { notes } = appNote
  const note = _createNote(title, txt, todos, type, src)
  let newNotes = [note, ...notes]
  appNote.notes = newNotes
  _saveToStorage(appNote)
  return Promise.resolve(note)
}

function _update(noteToUpdate) {
  let appNote = _loadFromStorage()
  appNote.notes = appNote.notes.map((note) =>
    note.id === noteToUpdate.id ? noteToUpdate : note
  )
  _saveToStorage(appNote)
  return Promise.resolve(noteToUpdate)
}

function _createNote(
  title = utilService.makeLorem(5),
  txt = utilService.makeLorem(8),
  todos,
  type,
  src
) {
  return {
    id: utilService.makeId(),
    type,
    isPinned: false,
    style: { backgroundColor: '#fff' },
    info: _getInfoNote(type, title, txt, todos, src),
  }
}

function _createNotes() {
  const notes = []
  for (let i = 0; i < 8; i++) {
    notes.push(_createNote())
  }
  return notes
}

function getEmptyNote(type) {
  console.log('type: from service', type)
  switch (type) {
    case 'note-txt':
      return {
        type: 'note-txt',
        isPinned: false,
        info: { title: '', txt: '' },
        style: { backgroundColor: '#00d' },
      }
      break
    case 'note-todo':
      return {
        type: 'note-todo',
        isPinned: false,
        style: { backgroundColor: '#00d' },
        info: { title: '', todos: [{ txt: '' }] },
      }
      break
    case 'note-img':
      return {
        type: 'note-img',
        isPinned: false,
        style: { backgroundColor: '#00d' },
        info: { title: '', src: '' },
      }
    case 'note-video':
      return {
        type: 'note-video',
        isPinned: false,
        style: { backgroundColor: '#00d' },
        info: { title: '', videoId: '', description: '' },
      }
      break
  }
}

function _getInfoNote(type, title, txt, todos, src) {
  switch (type) {
    case 'note-txt':
      return { title, txt, createdAt: Date.now() }
      break
    case 'note-todo':
      return { title, todos, createdAt: Date.now() }
      break
    case 'note-img':
      return { src, createdAt: Date.now() }
      break
  }
}

function _saveToStorage(notes) {
  storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
