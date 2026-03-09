/* ============================================================
   BLOQUE 3: FUNCIONES Y EVENTOS
   ============================================================ */

// Función con parámetros y retorno
function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    return total; // Devuelve el valor para guardarlo en una variable
}

let compra = calcularTotal(10, 3); // Guarda 30

// EVENTOS (Interactividad)
// Opción A: Función flecha (Moderna)
const boton = document.querySelector('#miBoton');
boton.addEventListener('click', () => {
    console.log("Botón pulsado");
});

// Opción B: Función con nombre (Reutilizable)
function saludar() {
    alert("¡Hola!");
}
// En el HTML: <button onclick="saludar()">