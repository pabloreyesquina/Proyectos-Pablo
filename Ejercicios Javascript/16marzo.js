/* const numeros = [1,4,2,6,8,0.45,-3]
const numerosCuadrado = numeros.map((n)=>n*n)
console.log(`Estos son los cuadrados: ${numerosCuadrado}`)

const numerosPares = numeros.filter((n)=>n%2===0)
console.log(`Estos son los pares: ${numerosPares}`) */

/* Transformación de Datos. Tienes un array de productos. Usa funciones arrow para:

Obtener solo los nombres de los productos.

Filtrar productos que cuesten menos de 100€.

Calcular el precio total de todos los productos.

Encontrar el producto más caro.

Crear un array con los nombres en mayúsculas.

Usa: map, filter, reduce, find, y funciones arrow concisas. */

  const productos = [
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 25, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 50, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Silla", precio: 150, categoria: "Muebles" }
  ];

  // Obtenemos solo los nombres de los productos
  const nombreProductos = productos.map((p)=>p.nombre)
  console.log(`Estos son los nombres de los productos: ${nombreProductos}`);

  // Filtramos productos que cuesten menos de 100€
  const productosBaratos = productos.filter((p)=>p.precio<100)
  console.log(productosBaratos);

  // Calculamos el precio total de todos los productos
  const precioFinal = productos.reduce((acumulador,producto)=>acumulador+producto.precio,0)
  console.log(`El precio final es: ${precioFinal}`);

  // Encontramos el producto más caro
  const productoMasCaro = productos.reduce((max, p) => p.precio > max.precio ? p : max);

  // Creamos un array con los nombres en mayúsculas
  const nombresMayusculas = productos.map((p)=>p.nombre.toUpperCase())
  console.log(`Estos son los nombres en mayúsculas: ${nombresMayusculas}`);


function generarld(prefijo = "user", numero = Math.random()) {
return `${prefijo}+${numero}`;

}

generarld(); // "user-0.123456 ... "
generarld("admin"); // "admin-0.789012 ... "


function configurar({
url = "https://api.ejemplo.com",
timeout = 5000,
retries = 3
} = {}) {
console.log(`URL: ${url}, Timeout: ${timeout}, Retries: ${retries}`);

}

configurar(); // Usa todos los valores por defecto
configurar({ url: "https://otra-api.com" }); // Solo cambia url


/* Sistema de Notificaciones. Crea un sistema de notificaciones con configuración flexible. Valores por defecto sugerido:

Tipo: "info"
Duración: 3000
Posición: "abajo-derecha"
Cerrable: true */

// Crea esta función con parámetros por defecto apropiados
  function mostrarNotificacion(
    mensaje,
    tipo = "info",
    duracion = 3000,
    posicion = "abajo-derecha",
    cerrable = true

    // Define los parámetros aquí
  ) {
    return `
      [${tipo.toUpperCase()}] ${mensaje}
      Duración: ${duracion}ms
      Posición: ${posicion}
      ${cerrable ? '(Cerrable)' : '(No cerrable)'}
    `;
  }
  
  // Debe funcionar así:
  mostrarNotificacion("Operación exitosa");
  // Usar valores por defecto para todo excepto el mensaje
  
  mostrarNotificacion("Error crítico", "error");
  // Cambiar tipo, resto por defecto
  
  mostrarNotificacion("Guardando...", "info", 5000, "arriba-derecha", false);
  // Configuración completa personalizada

// Usar destructuring anidado para acceder a las especificaciones del producto.
 

  const producto = {
    id: 101,
    nombre: "Laptop",
    precio: 999,
    especificaciones: {
      ram: "16GB",
      procesador: "Intel i7"
    }
  };

const {id, nombre, precio, especificaciones: {ram, procesador}} = producto;


//Crea una función que use destructuring en sus parámetros con un valor por defecto.


// TODO: Crea una función registrarUsuario que use destructuring
  // en sus parámetros para aceptar: nombre, email, edad (defecto: 18)
  // La función debe retornar un objeto con esos datos
  
  // Prueba:
  // registrarUsuario({ nombre: "Ana", email: "ana@email.com" })
  // Debe retornar: { nombre: "Ana", email: "ana@email.com", edad: 18 }

  function registrarUsuario({nombre, email, edad=18}){
    return {nombre, email, edad};
  };

  console.log (registrarUsuario({nombre:"Ana",email: "ana@email.com"}));

