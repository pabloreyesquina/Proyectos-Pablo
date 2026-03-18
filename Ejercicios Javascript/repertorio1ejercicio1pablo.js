function cuentaVocales(texto) {
    let vocales = 0;
    let consonantes = 0;

    const listaVocales = "aeiouáéíóú";
    const listaConsonantes = "bcdfghjklmnñpqrstvwxyz";
    const frase = texto.toLowerCase();

    // Recorrer la frase
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];

        // Comprobar si es vocal recorriendo la lista de vocales
        for (let j = 0; j < listaVocales.length; j++) {
            if (letra === listaVocales[j]) {
                vocales++;
            }
        }

        // Comprobar si es consonante recorriendo la lista de consonantes
        for (let k = 0; k < listaConsonantes.length; k++) {
            if (letra === listaConsonantes[k]) {
                consonantes++;
            }
        }
    }

    return "Vocales: " + vocales + ", Consonantes: " + consonantes;
}

// Pruebas
console.log(cuentaVocales("Hola Mundo"));          
console.log(cuentaVocales("JavaScript me gusta")); 

console.log(cuentaVocales("Año 34 de opción")); //Prueba tildes y mayusculas



