// Ejemplo: Adivinar un número
/* const numeroSecreto = 7;
let intentos = 0;
let adivinado = false; */

const prompt = require('prompt-sync')()

/* 
while (!adivinado) {
    let intento = parseInt(prompt("Adivina el número (1-10):"));
    intentos++;

    if (intento === numeroSecreto) {
        console.log(`¡Correcto! Lo has adivinado en ${intentos} intentos.`);
        adivinado = true; // Termina el bucle
    } else {
        console.log("Incorrecto. Inténtalo de nuevo.");
    }
} */


let suma = 0;

while (true) { // Bucle infinito a propósito
    let num = parseInt(prompt("Introduce un número (0 para salir, negativos no cuentan):"));

    if (num === 0) break; // Salimos del bucle
    
    if (num < 0) {
        console.log("Número negativo ignorado");
        continue; // Salta al principio del while, no lo suma
    }

    suma += num;
    console.log("Suma actual: " + suma);
}

console.log("Suma total final: " + suma);