export function VideoNote() {
  const API_YOUTUBE_KEY = 'AIzaSyBS7W3tKvKKSTQs7NOd9i0ky2t3lE4_e2g'
  var value = 'Tom Odell'

  function getVideo() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_YOUTUBE_KEY}&q=${value}`
    return axios.get(url).then((res) => {
      const lists = createVideoList(res.data)
      gChach.unshift({ value, lists })
      saveToStorage(STORAGE_KEY, gChach)
      return { value, lists }
    })
  }

  return (
    <section>
      VideoNote!!
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${video.videoId}"
      ></iframe>
      <h2>${video.title}</h2>
    </section>
  )
}
