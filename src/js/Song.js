export default class Song{
    constructor (k_song, v_song, c_song) {
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
    }
}
export function play_song(song) {
    song.element.onclick = () => {
        if (song.audio.paused || song.audio.ended) {
            song.audio.play();
            // song.album.classList.remove("close")
            // song.album.classList.add("open")
            song.album.classList.add("bucl")
        }
        else {
            song.audio.pause();
            // song.album.classList.remove("open")
            // song.album.classList.add("close")
            song.album.classList.remove("bucl")
        }
    }
}