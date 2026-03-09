/* ============================================================
   BLOQUE 4: OBJETOS (DATOS ESTRUCTURADOS)
   ============================================================ */

const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    hobbies: ["leer", "correr"],
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

// Acceder a los datos (Notación de punto)
console.log(usuario.nombre); // Juan
console.log(usuario.hobbies[0]); // leer
usuario.saludar(); // Ejecuta la función interna

// Modificar
usuario.edad = 26;
usuario.profesion = "Programador"; // Puedes añadir propiedades nuevas sobre la marcha