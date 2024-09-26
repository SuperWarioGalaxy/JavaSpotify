import songs from '../assets/aud/*.mp3';

Object.keys(songs);

const map = {};

let aux = 1;
for (var key of Object.keys(songs)){
    // asociar map[`.item-${aux}`] con la canción songs[key]
    map[`.item-${aux}`] = songs[key];
    aux ++;
};
//console.log(map);

//crear un objeto Player y pasa el objeto map
var Player = new Object();
Player.map = map

console.log(Player)