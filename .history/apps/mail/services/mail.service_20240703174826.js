import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const mailService = {
  query,
  // getById,
  remove,
  save,
  saveMails,
}

const KEY = 'mailListDB'
const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Appsus',
}

function query(filterBy) {
  let mails = _loadFromStorage()
  if (!mails) {
    mails = _createMails()
    _saveToStorage(mails)
  }

  //   if (filterBy) {
  //     let { vendor, minSpeed, maxSpeed } = filterBy
  //     if (!minSpeed) minSpeed = 0
  //     if (!maxSpeed) maxSpeed = Infinity
  //     mails = mails.filter(
  //       (car) =>
  //         car.vendor.includes(vendor) &&
  //         car.speed >= minSpeed &&
  //         car.speed <= maxSpeed
  //     )
  //   }

  return Promise.resolve(mails)
}

// function getById(carId) {
//   if (!carId) return Promise.resolve(null)
//   const cars = _loadFromStorage()
//   const car = cars.find((car) => carId === car.id)
//   return Promise.resolve(car)
// }

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

function _createMail() {
  return {
    id: utilService.makeId(),
    subject: utilService.makeLorem(12),
    body: utilService.makeLorem(30),
    isRead: false,
    isImportant: false,
    isSelected: false,
    sentAt: Date.now(),
    to: `${utilService.makeLorem(10)}@${utilService.makeLorem(10)}.com`,
  }
}

function _createMails() {
  const mails = []
  for (let i = 0; i < 10; i++) {
    mails.push(_createMail())
  }
  return mails
}

function _saveToStorage(mails) {
  storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
