export function ImgNote() {
  // The next 2 functions handle IMAGE UPLOADING to img tag from file system:
  function onImgInput(ev) {
    loadImageFromInput(ev, addNewImgGallery)
    // loadImageFromInput(ev, renderImg)
  }

  function loadImageFromInput(ev, onImageReady) {
    console.log('ev:', ev)
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
    console.log('img:', img)
    // gImgs.unshift({
    //   id: gImgs.length + 1,
    //   url: '',
    //   src: img.src,
    //   keywords: ['my', 'upload'],
    // })
    // renderGallery()
  }

  return (
    <section className="note-img">
      <input type="file" onChange={onImgInput} />
    </section>
  )
}
