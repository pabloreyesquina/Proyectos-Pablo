button.addEventListener('click', function(e) {
console.log(e.target); // El botón que fue clickeado

});

button.addEventListener('click', function(e) {
console.log(e.type); // "click"

});

button.addEventListener('click', function(e) {
console.log(e.timeStamp); // Tiempo en milisegundos

});

button.addEventListener('click', function(e) {
console.log(e.currentTarget);
});