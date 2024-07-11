const { useState, useEffect } = React

export function VideoNote() {
  const API_YOUTUBE_KEY = 'AIzaSyBS7W3tKvKKSTQs7NOd9i0ky2t3lE4_e2g'
  const [video, setVideo] = useState(null)

  useEffect(() => {
    const video = getVideo()
    console.log('video:', video)
  }, [])

  function getVideo(value = 'Tom Odell') {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_YOUTUBE_KEY}&q=${value}`
    return axios.get(url).then((res) => {
      res.data.map((video) => {
        console.log('video:', video)
        return {
          videoId: video.id.videoId,
          description: video.snippet.description,
          title: video.snippet.title,
        }
      })
      //   const lists = createVideoList(res.data)
      //   gChach.unshift({ value, lists })
      //   saveToStorage(STORAGE_KEY, gChach)
      //   return { value, lists }
    })
  }

  if (!video) return <section>Loading...</section>
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
