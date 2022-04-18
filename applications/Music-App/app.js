let musicPlayer = {
    init: function() {
        loadSong(songs[index], covers[index], titles[index]);
    },

    music: {
        index: 0,
        songs: ['m1', 'm2', 'm3'],
        covers: ['b1', 'b2', 'b3'],
        titles: ['Champagne - In the Heights (Official Track)', 'In the Heights - (Official Track)', 'Washington on your Side - Hamilton (Soundtrack)']
    }
}

// object properties
let { index } = musicPlayer.music;
const { songs, covers, titles } = musicPlayer.music;

// containers
const musicContainer = document.querySelector('.music-container');
const progressContainer = document.querySelector('.progress-container');

// navigations
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');

// information
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//  update song details
const loadSong = function(song, coverSong, coverTitle) {
    title.innerText = coverTitle;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${coverSong}.JPG`;
    playSong();
}

const loadSpeech = function() {
    const text = `${titles[index]} is now playing.`;
    let speakThis = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();
    speechSynthesis.speak(speakThis);
}

const playSong = function() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();

    loadSpeech();
}

const pauseSong = function() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

const nextSong = function() {
    if(index === songs.length-1) {
        index = 0;
    } else {
        index++;
    }

    loadSong(songs[index], covers[index], titles[index]);
}

// button navigation
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener('click', nextSong);

prevBtn.addEventListener('click', () => {
    if(index === 0) {
        index = songs.length-1;
    } else {
        index--;
    }

    loadSong(songs[index], covers[index], titles[index]);
});

progressContainer.addEventListener('click', event => {
    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('timeupdate', event => {
    const {duration, currentTime} = event.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

audio.addEventListener('ended', nextSong);

// initially load song info DOM
musicPlayer.init();


