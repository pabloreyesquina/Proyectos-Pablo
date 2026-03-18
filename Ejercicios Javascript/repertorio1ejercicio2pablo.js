const elSeniorDeLosAnillos = {
  "titulo": "El señor de los anillos: La comunidad del anillo",
  "año": 2001,
  "duracion": "178 minutos",
  "director": "Peter Jackson",
  "puntuacion_imdb": 8.8,
  "poster": "https://image.tmdb.org/t/p/w500/6MoC9Y089HsZj6lJvTcR63b8J5m.jpg"
};

//Array de claves
const claves = Object.keys(elSeniorDeLosAnillos);

claves.forEach(clave => {
    console.log(elSeniorDeLosAnillos[clave]);
});