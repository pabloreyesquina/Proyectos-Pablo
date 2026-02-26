// 1. "Importamos" la herramienta para pedir datos
const prompt = require('prompt-sync')();

// 2. Pedimos la edad y la convertimos a número
let edad = parseInt(prompt("Introduce tu edad: "));

if (!isNaN(edad)) {
    // 3. Aplicamos la misma lógica que en el HTML
    if (edad < 13) {
        console.log("Acceso denegado");
    }
    else if (edad >= 13 && edad <= 17) {
        console.log("Acceso a contenido para adolescentes");
    }
    else {
        console.log("Acceso completo");
        // Comprobación extra para senior
        if (edad >= 65) {
            console.log("¡Descuento senior!");
        }
    }
}
else {
    console.log("Introduce una edad válida")
}

switch 



/* Otra forma */

/* let edad;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Qué edad tienes? ', (respuesta) => {

    edad = parseInt(respuesta);

    if (!isNaN(edad)) {

        if (edad < 13) {
            console.log("¡Acceso denegado!");
        }
        else if (edad >= 13 && edad <= 17) {
            console.log("Acceso para adolescentes");
        }
        else {
            console.log("¡Acceso completo!");
            if (edad >= 65) {
                console.log("¡Descuento senior!");
            }
        }

    } else {
        console.log("Error: No has puesto un número.");
    }

    rl.close();
});
 */