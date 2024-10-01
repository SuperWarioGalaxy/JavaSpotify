import Song, {play_song} from './Song.js';

export default class Player{
    constructor(map) {
        Object.entries(map);
        let aux = 1;
        for (var [key, value] of Object.entries(map)){
            //crea la instancia para Song
            const song = new Song(key,value)
            play_song(song)
            //Invoca la función para reproducir la canción
            aux++;
        }
    }
}