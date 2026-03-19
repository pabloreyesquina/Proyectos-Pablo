Del día 18/03/2026

Tareas:

•
Usa 'find()' para buscar el producto con código "A003".

•
Usa 'find()' para encontrar el primer producto sin stock.

•
Usa 'findIndex()' para obtener la posición del producto "Monitor".

•
Usa 'findIndex()' para actualizar el stock del producto "A003" a 25 unidades.

•
Crea una función 'buscarProducto(codigo)' que devuelva el producto o un mensaje de error.


  const inventario = [
    { codigo: "A001", nombre: "Laptop", precio: 999, stock: 5 },
    { codigo: "A002", nombre: "Mouse", precio: 25, stock: 50 },
    { codigo: "A003", nombre: "Teclado", precio: 75, stock: 0 },
    { codigo: "A004", nombre: "Monitor", precio: 300, stock: 15 },
    { codigo: "A005", nombre: "USB", precio: 10, stock: 100 }
  ];
  
  
Ahora te toca a tí

Tareas con some() y every()

•
Verifica si hay algún producto con defectos.

•
Verifica si todos los productos pesan entre 95 y 100 gramos.

•
Ver si algún producto tiene dimensiones fuera de especificación (largo > 10 o ancho > 5).

•
Verifica si todos los productos sin defectos pesan más de 99 gramos.

•
Crea una función 'aprobarLote()' que devuelva true solo si todos los productos tiene 0 defectos Y pesan entre 95-110g.

// Por debajo de las clases lo que se implementan son 
// son prototipos. La programación de alto nivel actual
// en JS permite, preferiblemente, usar clases:
// Función constructora
function Persona(nombre) {
  this.nombre = nombre;
}

// Añadir un método al prototipo
Persona.prototype.saludar = function() {
  return "Hola, soy " + this.nombre;
};

const juan = new Persona("Juan");
console.log(juan.saludar()); // "Hola, soy Juan"
// 'juan' no tiene 'saludar', lo hereda de 'Persona.prototype'
// lo anterior se haría preferiblemente con class Persona{
    constructor(nombre){
        this.nombre = nombre
    }
    // etc
}
//Para clase:
Ahora te toca a tí

Clases básicas: Crea una clase Libro con:

•
Constructor que recibe: titulo, autor, paginas.

•
Propiedad leido inicializada en false.

•
Método marcarComoLeido() que cambia leído a true.

•
Método info() que devuelve string con toda la información.


Ejemplo de uso:
  const libro = new Libro("1984", "George Orwell", 328);
  console.log(libro.info()); 
  // "1984 por George Orwell - 328 páginas (No leído)"
  
  libro.marcarComoLeido();
  console.log(libro.info()); 
  // "1984 por George Orwell - 328 páginas (Leído)"

Clases básicas: Crea una clase CuentaBancaria con:

•
Constructor que recibe: titular, saldoInicial (defecto 0).

•
Método depositar(cantidad) que aumenta el saldo.

•
Método retirar(cantidad) que disminuye el saldo pero solo si hay suficiente saldo

•
Método consultarSaldo() que muestra el saldo actual.

•
Asegúrate de validar: No se puede depositar cantidad negativa, No se puede retirar más de lo que hay en el saldo.
// PROPUESTA DE EJERCICIO
/* Crear una clase para objetos persona que tenga como atributos: nombre, apellidos, NIF. crearle internamente un método estático que valide la letra del NIF. Que como método no estático tenga info() que dará toda la información de un
objeto de la clase Persona*/


Ejercicios del día 19/03/2026

 Crea una clase CarritoCompra que:

Tenga un array de productos vacío al inicio.

Tenga método agregarProducto(producto) que añade al array.

Tenga método eliminarProducto(nombreProducto) que lo quita.

Tenga método calcularTotal() que suma los precios.

Tenga método aplicarDescuento(porcentaje) al total.

Tenga método mostrarProductos() que lista todo. */


Estructura de producto:
  const producto = {
    nombre: "Laptop",
    precio: 999,
    cantidad: 1
  };