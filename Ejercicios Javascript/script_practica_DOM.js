//Ejercicio 1: Seleccionar por ID y Cambiar Texto
//Problema: Selecciona el encabezado < h1> 
// con el ID tituloPrincipal y cambia su texto a «DOM Manipulado con Éxito».
//let titulo = document.getElementById("tituloPrincipal");
//titulo.textContent = "Dom Manipulado con Éxito";
// Seleccionamos el H1 usando su ID
const titulo = document.getElementById('tituloPrincipal');

// Verificamos si el elemento existe antes de intentar
// modificarlo (buena práctica)
if (titulo) {
    // Cambiamos el contenido de texto del elemento
    titulo.textContent = "DOM Manipulado con Éxito";
    console.log("Texto del título cambiado.");
} else {
    console.log("Elemento con ID 'tituloPrincipal' no encontrado.");
}
//Ejercicio 2: Seleccionar por ID y Cambiar Estilo
//Problema: Selecciona el párrafo con ID parrafoIntro 
// y cambia su color de fondo a lightblue.
const parrafo = document.getElementById('parrafoIntro');
parrafo ? (parrafo.style.backgroundColor = "lightblue")
    && console.log("Color de fondo cambiado") :
    console.log("NO es posible cambiar")

// Ejercicio 3: Seleccionar el Primer Elemento por
// Clase con querySelector
// Problema: Selecciona el primer div que tenga 
// la clase caja y añade un borde rojo de 2px.
const elementoPorClase = document.querySelector("div.caja");
if (elementoPorClase){
    elementoPorClase.style.border = "2px solid red"
    console.log("Cambio a border rojo dos píxeles exitoso ")
}

//Ejercicio 4: Seleccionar Todos los Elementos por Clase con querySelectorAll
//Problema: Selecciona todos los elementos < li> que 
// tengan la clase item y cambia el color de su texto a blue.
/* const elementosPorClase = document.querySelectorAll("li.item");
if (elementosPorClase.length>0){ // elementosPorClase es array
    elementosPorClase.forEach(element => {
        if (!element){
            console.log("No hay elemento de tipo <li> y que sea clase item")
        }
        else{
            element.style.color = "blue";
        }
    })
}
else{
    console.log("No se encuentra un array de elementos de tipo <li> y que sea clase item")
} */
    
/* esta forma ha dicho que puede ser para examen: */


const elementosPorClase = document.querySelectorAll("li.item");
if (elementosPorClase.length>0){ // elementosPorClase es array
    for(let ppp=0; ppp<elementosPorClase.length; ppp++){
        if (elementosPorClase[ppp]){
            elementosPorClase[ppp].style.color = "blue";
            }
            
    else {   
        console.log("No se encontraron elementos de tipo <article> con clase 'item'");
     }

    }
    }

// Usamos un selector descendiente: '.importante p' selecciona un <p> dentro de un elemento con clase 'importante'
const parrafoImportante = document.querySelector('.importante p');

if (parrafoImportante) {
    // Usamos classList.add() para añadir una clase sin borrar las existentes
    parrafoImportante.classList.add('resaltado');
    console.log("Clase 'resaltado' añadida al párrafo dentro del div importante.");
} else {
    console.log("Párrafo dentro de '.importante' no encontrado.");
}

/* Ejercicio 7: Usar getElementById para Obtener Valor de Input y Mostrarlo

Problema: Crea una función mostrarEntrada (que se llama al hacer clic en el botón con ID botonMostrar). Dentro de la función, obtén el valor escrito en el input con ID entradaUsuario y muéstralo en el párrafo con ID textoMostrado.
¡Inténtalo! ¿Qué propiedad de un elemento input contiene el texto que el usuario ha escrito?
Solución (dentro de script.js, la función se asocia al botón en el HTML):
 */

function mostrarEntrada(){
    const inputUsuario = document.getElementById("entradaUsuario")
    const mostrarEntrada = document.getElementById("textoMostrado")
    mostrarEntrada.textContent = inputUsuario.value
}

/* Ejercicio 9: Combinar querySelectorAll y getElementById

Problema: Selecciona la lista <ul> con ID listaItems usando getElementById. Luego, dentro de esa lista, selecciona todos los <li> 
que tengan la clase importante usando querySelectorAll (aplicado sobre el elemento de la lista, no sobre document) y añade un borde verde.
¡Inténtalo! ¿Sabías que puedes usar querySelector y querySelectorAll sobre un elemento ya seleccionado, en lugar de sobre todo el document?
Solución (script.js): */

    // Primero, seleccionamos el contenedor (la lista) por ID
const lista = document.getElementById('listaItems');

if (lista) {
    // Ahora, buscamos DENTRO de 'lista' los elementos con clase 'importante'
    const itemsImportantesEnLista = lista.querySelectorAll('.importante'); // ¡Ojo! Se llama sobre 'lista'

    if (itemsImportantesEnLista.length > 0) {
        itemsImportantesEnLista.forEach(item => {
            item.style.border = '2px solid green';
        });
        console.log(`Borde añadido a ${itemsImportantesEnLista.length} item(s) importante(s) dentro de la lista.`);
    } else {
        console.log("No se encontraron items '.importante' dentro de #listaItems.");
    }
} else {
    console.log("Elemento con ID 'listaItems' no encontrado.");
}


/* Ejercicio 10: Usar querySelector para una Función Ligada a un Botón

Problema: Crea la función cambiarTexto (asociada al botón con ID botonCambiar). Dentro de ella, usa querySelector para encontrar el primer párrafo (p) que sea hermano adyacente (+) del botón (asumiendo que está justo después, o busca el párrafo dentro del div padre) y cambia su texto a «Texto cambiado por el botón». (Nota: Una forma más robusta sería darle un ID/clase al párrafo a cambiar, pero este ejercicio practica selectores). Vamos a hacerlo buscando el párrafo dentro del div padre del botón.
¡Inténtalo! ¿Cómo puedes encontrar el elemento padre de un botón? ¿Cómo buscas un elemento dentro de otro padre encontrado dinámicamente?
Solución (script.js): */

function cambiarTexto() {
    const botonAdyacente = document.querySelector("#botonCambiar")
    botonAdyacente.previousElementSibling.textContent = "Texto cambiado por el botón"
    
}