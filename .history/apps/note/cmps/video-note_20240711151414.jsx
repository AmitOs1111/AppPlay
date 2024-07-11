const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function VideoNote({ setAddNote }) {
  const API_YOUTUBE_KEY = 'AIzaSyBS7W3tKvKKSTQs7NOd9i0ky2t3lE4_e2g'
  const [newNote, setNewNote] = useState(noteService.getEmptyNote('note-video'))
  const [video, setVideo] = useState(null)

  useEffect(() => {
    console.log('Rendering useEffect-----')
    const video = getVideo().then((video) => {
      setVideo(video)
    })
  }, [])

  function getVideo(value = 'Tom Odell') {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_YOUTUBE_KEY}&q=${value}`
    return axios.get(url).then((res) => {
      const video = res.data.items[2]
      return {
        videoId: video.id.videoId,
        description: video.snippet.description,
        title: video.snippet.title,
      }
    })
  }

  function onAddNote() {
    if (video) setAddNote(video)
  }

  if (!video) return <section>Loading...</section>
  console.log('video:', video)
  return (
    <section>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${video.videoId}"
      ></iframe>
      <p>{video.title}</p>

      <button onClick={() => onAddNote()}>add note</button>
    </section>
  )
}
