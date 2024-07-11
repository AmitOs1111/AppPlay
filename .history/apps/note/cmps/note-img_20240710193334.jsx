const { useState } = React

import { noteService } from '../services/note.service.js'

export function ImgNote(note) {
  const [newNote, setNewNote] = useState(
    note || noteService.getEmptyNote('note-img')
  )
  const [uploadImg, setUploadImg] = useState(null)
  // The next 2 functions handle IMAGE UPLOADING to img tag from file system:
  function onImgInput(ev) {
    loadImageFromInput(ev, addNewImgGallery)
    // loadImageFromInput(ev, renderImg)
  }

  function loadImageFromInput(ev, onImageReady) {
    //   document.querySelector('.share-container').innerHTML = ''

    let reader = new FileReader()

    reader.onload = (event) => {
      var img = new Image()
      img.src = event.target.result
      img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0])
  }

  function addNewImgGallery(img) {
    setUploadImg({ src: img.src })
  }

  function onAddImgNote() {
    console.log('imgggg')
  }

  console.log('rendering....')
  return (
    <section className="note-img">
      <input type="file" onChange={onImgInput} />
      {uploadImg && (
        <div className="container-img">
          <img src={uploadImg.src} alt="" />
          <button onClick={() => onAddImgNote()}>'add note'</button>
        </div>
      )}
    </section>
  )
}
