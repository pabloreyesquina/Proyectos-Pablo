/* ============================================================
   BLOQUE 2: ARRAYS (LISTAS)
   ============================================================ */

const frutas = ["Manzana", "Pera", "Plátano"];

// Acceso y Modificación
console.log(frutas[0]); // Manzana (empezamos en 0)
frutas[1] = "Sandía";   // Cambia Pera por Sandía
console.log(frutas.length); // 3 (cantidad de elementos)

// Métodos básicos de modificación
frutas.push("Naranja");    // Añade al FINAL
frutas.unshift("Fresa");   // Añade al PRINCIPIO
frutas.pop();              // Quita el ÚLTIMO
frutas.shift();            // Quita el PRIMERO

// RECORRER UN ARRAY (Lo más común en exámenes)
frutas.forEach((fruta, i) => {
    console.log(`La fruta en la posición ${i} es ${fruta}`);
});

// BUSCAR EN UN ARRAY
let tienePera = frutas.includes("Pera"); // Devuelve true o false
let posicion = frutas.indexOf("Plátano"); // Devuelve el índice (o -1 si no está)