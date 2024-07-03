import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const mailService = {
  getById,
  query,
//   remove,
//   save,
}



const KEY = 'mailListDB'

const loggedinUser = {
    email: 'user@appsus.com',
  fullname: 'Appsus',
    }

function query(filterBy) {
    console.log('hello from mail service query');
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

function getById(carId) {
  if (!carId) return Promise.resolve(null)
  const cars = _loadFromStorage()
  const car = cars.find((car) => carId === car.id)
  return Promise.resolve(car)
}

// function getNextCarId(carId) {
//   let cars = _loadFromStorage()
//   const carIdx = cars.findIndex((car) => car.id === carId)
//   const nextCarIdx = carIdx + 1 === cars.length ? 0 : carIdx + 1
//   return cars[nextCarIdx].id
// }

// function remove(carId) {
//   // return Promise.reject('Not now!!!')
//   let cars = _loadFromStorage()
//   cars = cars.filter((car) => car.id !== carId)
//   _saveToStorage(cars)
//   return Promise.resolve()
// }

// function save(car) {
//   if (car.id) return _update(car)
//   else return _add(car)
// }

// function _add({ vendor, speed }) {
//   let cars = _loadFromStorage()
//   const car = _createMail(vendor, speed)
//   cars = [car, ...cars]
//   _saveToStorage(cars)
//   return Promise.resolve(car)
// }

// function _update(carToUpdate) {
//   let cars = _loadFromStorage()
//   cars = cars.map((car) => (car.id === carToUpdate.id ? carToUpdate : car))
//   _saveToStorage(cars)
//   return Promise.resolve(carToUpdate)
// }


function _createMail() {
  return {
    id: utilService.makeId(),
    subject: utilService.makeLorem(12),
    body:utilService.makeLorem(30),
    isRead: false,
    sentAt : Date.now(),
    to:`${utilService.makeLorem(10)}@${utilService.makeLorem(10)}.com` 'momo@momo.com',
   
  }
}

function _createMails() {
  const mails = []
  for (let i = 0; i < 10; i++) {
   mails.push(_createMail(vendor))
  }
  return mails
}

function _saveToStorage(mails) {
  storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
