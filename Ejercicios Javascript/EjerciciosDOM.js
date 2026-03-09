function cambiarTexto(){
document.getElementById("tituloPrincipal").textContent = "DOM Manipulado"

}

const intro = document.getElementById("parrafoIntro")

if (intro) {
    intro.style.backgroundColor = "lightblue";
    console.log("Color de fondo del párrafo Intro cambiado");
}else{
    console.log("Elemento con ID 'parrafoIntro' no encontrado.");
}

/* Ejercicio 3: Seleccionar el Primer Elemento por Clase con querySelector
Problema: Selecciona el primer div que tenga la clase caja y añade un borde rojo de 2px. */

const elementocaja = document.querySelector("div.caja")

if (elementocaja) {
    elementocaja.style.border = "2px solid red"
}

/* Ejercicio 4: Seleccionar Todos los Elementos por Clase con querySelectorAll
Problema: Selecciona todos los elementos <li> que tengan la clase item y cambia el color de su texto a blue.
¡Inténtalo! ¿Cómo seleccionas múltiples elementos por clase? ¿Qué estructura de bucle usarías para aplicar el cambio a cada uno? */

const elementosPorClase = document.querySelectorAll("li.item");

if (elementosPorClase.length>0) {
    elementosPorClase.forEach(item =>{
        item.style.color= "blue";
    });
    console.log(`Color de texto cambiado para ${elementosPorClase.length} items.`);
} else {
    console.log("Ningún elemento con clase 'item' encontrado.");
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