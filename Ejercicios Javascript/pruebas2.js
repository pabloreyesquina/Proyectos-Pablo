const carrito = [
    {nombre: "Pablo", precio:500, cantidad: 2},
    {nombre: "Jorge", precio:200, cantidad: 3},
    {nombre: "Juan", precio:100, cantidad: 2},
    {nombre: "Rosa", precio:300, cantidad: 1}
];

carrito.push ({
    nombre: "Ana", 
    precio: 300, 
    cantidad: 1
})

console.log(carrito);

let total = 0
carrito.forEach(elemento=>{
    let subtotal = elemento.precio*elemento.cantidad
    total+=subtotal

});

console.log(`El total de la compra es: ${total}`);

//Prueba Gemini

let edad = 18;
let tieneEntrada = true;

if (edad>=18 && tieneEntrada===true){
    console.log("Bienvenido");
}
if (edad>=18 && tieneEntrada===false) {
    console.log("Tienes que comprar una entrada");
}

else {
    console.log("Acceso denegado")

}
// Otro ejercicio Gemini

const productos = [
    { nombre: "Mesa", precio: 50 },
    { nombre: "Silla", precio: 20 },
    { nombre: "Lámpara", precio: 15 }
];

productos.push ({nombre: "Estante", precio: 40});

console.log(productos)

productos.forEach(item=>{
    if(item.precio<30){
        console.log(item.nombre)
    }
}
)

//Ejemplo de código: modificación de objeto dentro de una promesa y la devolución del objeto modificado. La ventaja es que usuario es global y no requeriría return.
/* 
const usuario = { nombre: "Ana", activo: false };
async function actualizarUsuario(user) {
  // Modificar
  user.activo = true;
  user.ultimoAcceso = Date.now();
  return user; // Retorna el objeto directamente
}
// Uso. Al usar then se hace lo equivalente a un await
actualizarUsuario(usuario).then(console.log); */

//Otro ejemplo de Gemini
const usuario = {
    nombre:"Pablo", premium:true
}

const saludarUsuario = (usuario)=>{
    if(usuario.premium===true){
        console.log(`Bienvenido ${usuario.nombre}`)
    }
  else{
        console.log(`Hola ${usuario.nombre}`)
}
}

saludarUsuario (usuario)