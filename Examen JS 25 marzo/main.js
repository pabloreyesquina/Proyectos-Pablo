/* Pablo Alvarez LLamas*/
//JavaScript para ejercicios 1, 2 y 3

window.onload = function () {
    // 1. Mostrar nodos ANTES
    console.log("Antes:", document.body.childNodes);
    

    //Funcion para ejercicio 1
    gestionarRadios();

    //Funcion para ejercicio 2
    gestionarEventos();

    // 2. Mostrar nodos DESPUÉS
    console.log("Después:", document.body.childNodes);      
    
}
;

function gestionarRadios() {
    const opciones = document.getElementsByName("eleccion");

    for (let i = 0; i < opciones.length; i++) {

        opciones[i].addEventListener('click', function () {
            alert("Has elegido la opcion " + this.value);

            console.log("Seleccionado: " + this.value);
        });
    }
}
function gestionarEventos() {
    const opciones = document.getElementsByName("eleccion");
    const cuadroTexto = document.getElementById("resultado");

    for (let i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener('mouseover', function () {
            let textoRadio = this.nextSibling.textContent.trim();

            cuadroTexto.value = textoRadio;
        });
    }
}