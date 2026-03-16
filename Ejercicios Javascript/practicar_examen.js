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
    

console.log(calcularDescuento(100,20))

const usuarios = [
    { id: 101, nombre: "Lucía" },
    { id: 102, nombre: "Marcos" },
    { id: 103, nombre: "Raúl" }
];

const usuarioEncontrado = usuarios.find(u=>u.id===102);

console.log(usuarioEncontrado)

function calcular(a, b) {
  return [a + b, a * b];
}

const [suma, multiplicacion] = calcular(5, 2);

console.log([suma,multiplicacion])