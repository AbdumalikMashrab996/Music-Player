const container = document.querySelector('.container')
const aboutBtn = document.querySelector('.about-btn')
const gamburger = document.querySelector('.gamburger')
const mixBtn = document.querySelector('.mix-btn')
const cover = document.querySelector('.cover')
const resetBtn = document.querySelector('.reset-btn')
const title = document.querySelector('.title')
const coverName = document.querySelector('.cover-name')
const time = document.querySelector('.time')
const endTime = document.querySelector('.end-time')
const navigation = document.querySelector('.navigation')
const child = document.querySelector('.child')
const audio = document.querySelector('.audio')
const prevBtn = document.querySelector('.prev-btn')
const playBtn = document.querySelector('.play-btn')
const nextBtn = document.querySelector('.next-btn')
const voiceRange = document.querySelector('.voice-range')

const songs = [
    'Alan Walker - Faded',
    'Ampyx - Rise',
    'Bass music',
    'Eric Saade feat. Gustav Noren, Filatov & Karas - Wide Awake (Red Mix)',
    'Faded Instrumental Music',
    'Jo Cohen & Sex Whales - We Are [NCS Release]',
    'Ludovico Einaudi - Experience',
    'Minelli - Rampampam',
    'MiyaGi & Эндшпиль - I Got Love',
    'Nathan Goshan - Think about',
    'Nekozilla [NCS Release] - Different Heaven',
    'Roykskop - Here come the shown',
    'Syn Cole - Feel Good [NCS Release]',
    'Tobu & Itro - Sunburst [NCS Release]',
    'Zubi & Anatu - Sugar (Cricket & Avaxus Remix)',
]

let currentSong = 0

playSong(songs[currentSong])

// ============== FUNCTIONS ====================================================
function playSong(song) {
    audio.src = `./music/${song}.mp3`
    title.textContent = song
    cover.src = `./images/${song}.jpg`
}

function playMusic() {
    const isplay = container.classList.contains('play')
    if(!isplay) {
        play()
    } else {
        pause()
    }
}

function play() {
    audio.play()
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    playBtn.style.backgroundColor = '#49d3d8'
    container.classList.add ('play')
}

function pause() {
    audio.pause()
    playBtn.innerHTML = '<i class="fas fa-play"></i>'
    playBtn.style.backgroundColor = 'rgb(29, 30, 36)'
    container.classList.remove ('play')
}

function nextMusic() {
    currentSong++

    if(currentSong > songs.length - 1) {
        currentSong = 0
    }

    playSong(songs[currentSong])
    audio.play()
}

function prevMusic() {
    currentSong--

    if(currentSong < 0) {
        currentSong = songs.length - 1
    }

    playSong(songs[currentSong])
    audio.play()
}

function proccess(e) {
    let currentTime = audio.currenTime
    const widthProccess = (currentTime / e.target.duration) * 100
    child.style.width = `${widthProccess}%`
}

function changeTimeStep(e) {
    audio.currenTime = (e.offsetX / this.offsetWidth) * audio.duration
}
// ======================== EVENT'S ===================================
voiceRange.addEventListener('input', ()=> {
    audio.volume = voiceRange.value / 100
})

mixBtn.addEventListener('click', ()=> {
    voiceRange.classList.toggle ('hidden')
})

playBtn.addEventListener('click', playMusic)
prevBtn.addEventListener('click', prevMusic)
nextBtn.addEventListener('click', nextMusic)
audio.addEventListener('click', proccess)
audio.addEventListener('ended', nextMusic)
navigation.addEventListener('click', changeTimeStep)