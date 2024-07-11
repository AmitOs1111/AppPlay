const { useState } = React

export function ImgNote() {
  const [uploadImg, setUploadImg] = useState(null)
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
    setUploadImg({ src: img.src })
  }
  console.log('rendering....')
  return (
    <section className="note-img">
      <input type="file" onChange={onImgInput} />
    </section>
  )
}
