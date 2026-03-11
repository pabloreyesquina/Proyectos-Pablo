function hacerTareaEspera (callback){
    console.log("Esperando")
    setTimeout(()=>{
        callback();
        },4000);
    ;
}

function cuandoTermine (){

    console.log("Este mensaje aparece después de 4 segundos")
}

hacerTareaEspera(cuandoTermine);


//Ejemplo de callback con función anonima


function procesar(datos, callback) {
console.log("Procesando datos ... ");
callback(datos.toUpperCase());

}

function mostrarResultado(resultado) {
console.log("Resultado: " + resultado);

procesar("hola mundo", mostrarResultado);

// Mismo ejemplo con función anónima:
procesar("hola mundo", function (resultado) {
console.log("Resultado: "+ resultado);

});

// Con arrow function (más moderno):
procesar("hola mundo", (resultado) => {
console.log("Resultado: " + resultado);
})}

/* Otro ejemplo que nos puso el profesor */

//  Carga de datos asíncrona (Simulación de API): Muestra cómo una acción depende de la finalización de otra, usando un callback para gestionar el resultado.
function obtenerUsuario(id, callback) {
    console.log("Consultando base de datos...");
    setTimeout(() => {
        callback({ id: id, nombre: "Ana" });
    }, 2000);
}

obtenerUsuario(1, (usuario) => {
    console.log(`Usuario recibido: ${usuario.nombre}`);
});