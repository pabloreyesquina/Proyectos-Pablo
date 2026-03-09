/* ============================================================
   BLOQUE 1: CONDICIONALES Y BUCLES
   ============================================================ */

// CONDICIONALES (SI / SINO)
let edad = 18;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else if (edad > 12) {
    console.log("Es adolescente");
} else {
    console.log("Es un niño");
}

// BUCLES (REPETIR)
// For clásico: Se usa cuando sabes cuántas veces repetir (ej: 5 veces)
for (let i = 0; i < 5; i++) {
    console.log("Vuelta número: " + i);
}

// While: Se usa cuando NO sabes cuántas veces, solo que se cumpla una condición
let saldo = 100;
while (saldo > 0) {
    saldo -= 20; // Gasta de 20 en 20
    console.log("Aún me queda dinero");
}

// OPERADORES LÓGICOS (Para el "if")
// && (Y) -> Ambas deben ser ciertas
// || (O) -> Al menos una debe ser cierta
// !  (NO) -> Invierte el valor (true -> false)
if (tieneEntrada && !estaBorracho) {
    console.log("Puede entrar al concierto");
}