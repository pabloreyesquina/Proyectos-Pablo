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
