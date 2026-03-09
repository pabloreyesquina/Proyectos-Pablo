/* ============================================================
   GUÍA DEFINITIVA DE MANIPULACIÓN DEL DOM PARA EL EXAMEN
   ============================================================ */

// 1. SELECCIÓN DE ELEMENTOS
// ------------------------------------------------------------

// Por ID (el más rápido y único)
const titulo = document.getElementById('tituloPrincipal');

// Por Selector CSS (el más versátil)
const primerParrafo = document.querySelector('p'); // Solo el primero
const todosLosItems = document.querySelectorAll('.item'); // Devuelve una NodeList (como un array)
const itemEspecial = document.querySelector('.caja.importante p'); // Selector descendiente complejo



// 2. MODIFICAR CONTENIDO Y ESTILOS
// ------------------------------------------------------------

if (titulo) {
    titulo.textContent = "Nuevo Texto"; // Solo texto plano (seguro)
    titulo.innerHTML = "Texto con <b>Negrita</b>"; // Renderiza HTML
    titulo.style.color = "blue"; // Cambia CSS directo (inline)
    titulo.style.backgroundColor = "yellow"; // Nota: camelCase (no background-color)
}


// 3. GESTIÓN DE CLASES (La mejor forma de cambiar diseño)
// ------------------------------------------------------------

const caja = document.querySelector('.caja');
if (caja) {
    caja.classList.add('resaltado');    // Añade la clase
    caja.classList.remove('oculto');    // Quita la clase
    caja.classList.toggle('activo');    // Si la tiene la quita, si no la pone
    
    if (caja.classList.contains('importante')) {
        console.log("Esta caja es importante");
    }
}



// 4. FORMULARIOS (Inputs)
// ------------------------------------------------------------

function manejarInput() {
    const input = document.getElementById('entradaUsuario');
    const valor = input.value; // ¡IMPORTANTE! Los inputs usan .value, no .textContent
    console.log("El usuario escribió: " + valor);
    
    input.value = ""; // Limpiar el input después de leerlo
}


// 5. NAVEGACIÓN POR EL DOM (Moverse entre etiquetas)
// ------------------------------------------------------------

const boton = document.querySelector('#botonCambiar');

// Ir al padre
const padre = boton.parentElement; 

// Ir al "jefe" más cercano con una clase específica (Muy útil)
const contenedorCaja = boton.closest('.caja');

// Ir a los hermanos
const hermanoArriba = boton.previousElementSibling;
const hermanoAbajo = boton.nextElementSibling;




// 6. RECORRER LISTAS (Bucle forEach)
// ------------------------------------------------------------

const listaNegra = document.querySelectorAll('li');

listaNegra.forEach((elemento, indice) => {
    elemento.textContent = `Item número ${indice + 1}`;
    elemento.style.opacity = "0.5";
});


// 7. EVENTOS (Hacer que la página reaccione)
// ------------------------------------------------------------

// Opción A: Desde el JS (La más profesional)
const btnMostrar = document.getElementById('botonMostrar');
if (btnMostrar) {
    btnMostrar.addEventListener('click', function() {
        alert("¡Has hecho clic!");
    });
}

// Opción B: Función para usar con onclick="miFuncion()" en el HTML
function miFuncion() {
    console.log("Evento disparado desde el HTML");
}

/* ============================================================
   CONSEJOS PARA EL EXAMEN:
   1. Siempre verifica si el elemento existe con un 'if (elemento)'.
   2. Recuerda que querySelectorAll necesita un bucle (forEach).
   3. CSS usa :nth-child(1) para el primero, JS usa array[0].
   4. ¡No olvides las comillas en los selectores! ".clase", "#id"
   ============================================================ */