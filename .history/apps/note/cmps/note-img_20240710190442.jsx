export function ImgNote() {
  // The next 2 functions handle IMAGE UPLOADING to img tag from file system:
  function onImgInput(ev) {
    console.log('ev:', ev)
    loadImageFromInput(ev, addNewImgGallery)
    // loadImageFromInput(ev, renderImg)
  }

  function loadImageFromInput(ev, onImageReady) {
    //   document.querySelector('.share-container').innerHTML = ''

    var reader = new FileReader()

    reader.onload = (event) => {
      var img = new Image()
      img.src = event.target.result
      img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0])
  }

  return (
    <section className="note-img">
      <input type="file" onChange={onImgInput} />
    </section>
  )
}
