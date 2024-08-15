const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');

const songs = [
    {
        name: 'song1',
        title: 'Song One',
        artist: 'Artist One'
    },
    {
        name: 'song2',
        title: 'Song Two',
        artist: 'Artist Two'
    },
    {
        name: 'song3',
        title: 'Song Three',
        artist: 'Artist Three'
    }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = `${song.name}.mp3`;
}

function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);

loadSong(songs[songIndex]);
