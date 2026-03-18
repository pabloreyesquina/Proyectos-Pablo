const inventario = [
    { nombre: "Teclado", cantidad: 15 },
    { nombre: "Ratón", cantidad: 3 },
    { nombre: "Monitor", cantidad: 2 },
    { nombre: "Alfombrilla", cantidad: 20 }
];

inventario.forEach(item => {
    if (item.cantidad < 5) {
        console.log(`Alerta! Quedan pocos de: ${item.nombre}`);
    }
});

const calcularDescuento = (precioOriginal, porcentaje) =>
    precioOriginal - (precioOriginal * porcentaje / 100
    )


console.log(calcularDescuento(100, 20))

const usuarios = [
    { id: 101, nombre: "Lucía" },
    { id: 102, nombre: "Marcos" },
    { id: 103, nombre: "Raúl" }
];

const usuarioEncontrado = usuarios.find(u => u.id === 102);

console.log(usuarioEncontrado)

function calcular(a, b) {
    return [a + b, a * b];
}

const [suma, multiplicacion] = calcular(5, 2);

console.log([suma, multiplicacion])


const personas = [
    { nombre: "Álex", edad: 17 },
    { nombre: "Sonia", edad: 22 },
    { nombre: "Dani", edad: 15 },
    { nombre: "Carla", edad: 30 }
];

for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    if (persona.edad >= 18) {
        console.log(persona.nombre + " tiene acceso permitido");

    } else {
        console.log(persona.nombre + " es menor de edad");
    }


}

/* Crea una función llamada presionarInterruptor.

Dentro de la función, cambia el valor de lampara.encendida.

Al final (fuera de la función), llama a la función y luego haz un console.log(lampara) para comprobar que el cambio se ha realizado.
 */

const lampara = {
    color: "blanco",
    encendida: false
};
const presionarInterruptor = () => {
    lampara.encendida = !lampara.encendida;
}

presionarInterruptor();
console.log(lampara.encendida)

presionarInterruptor();
console.log(lampara.encendida)

//Otro ejercicio para examen con Gemini

const carrito = [
    { nombre: "Leche", precio: 1.20, oferta: false },
    { nombre: "Cereal", precio: 3.50, oferta: true },
    { nombre: "Pan", precio: 0.80, oferta: false },
    { nombre: "Vino", precio: 12.00, oferta: true }
];

/* Tu objetivo:
Recorre el carrito con un forEach.

Si el producto está en oferta, imprime: "[Nombre] tiene un 10% de descuento".

Si no está en oferta, imprime simplemente: "[Nombre] cuesta [Precio]€" */

carrito.forEach(item=>{
    if (item.oferta ===true){
        console.log(`${item.nombre} tiene un 10% de descuento`);
    }
    else{
        console.log(`${item.nombre} cuesta ${item.precio}`);
    }
    });

//Otro ejercicio de Gemini

const cartelera = [
    { titulo: "Spider-Man", duracion: 120, genero: "Acción" },
    { titulo: "Pikachu", duracion: 90, genero: "Animación" },
    { titulo: "Batman", duracion: 150, genero: "Acción" },
    { titulo: "Toy Story", duracion: 80, genero: "Animación" }
];

/* Crea una variable llamada pelisLargas.

Usa el método .filter() sobre cartelera.

La condición debe ser que la duracion sea mayor a 100.

Al final, imprime en la consola la variable pelisLargas. */

const pelisLargas = cartelera.filter(item => item.duracion > 100);
console.log(pelisLargas)