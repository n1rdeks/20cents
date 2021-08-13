const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')


const toggleVideoStatus = () => video.paused ? video.play() : video.pause()

const updatePlayIcon = () => {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}
  
const stopVideo = () => {
  video.currentTime = 0
  video.pause()
}

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60)
  // Get seconds
  let seconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0')

  timestamp.innerHTML = `${minutes}:${seconds}`
}

const setVideoProgress = () => {
  video.currentTime = parseInt(progress.value) * video.duration / 100
}

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)

//reset progressBar after reloading page
progress.value = 0
