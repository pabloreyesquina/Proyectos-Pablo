const precios = [19.9934, 29.9, 9.99];
const formateados = precios.map(precio => `$${precio.toFixed(2)}`);
// ["$19.99", "$29.99", "$9.99"]

console.log(formateados)

const tareas = ["Comprar pan", "Estudiar", "Hacer ejercicio"];
const html = tareas.map(tarea => `<li>${tarea}</li>`);
// ["<li>Comprar pan</li>", "<li>Estudiar</li>", ... ]
console.log(html);
//Añadir la funcionalidad de crear el string que representa el html de una lista

const listaString = tareas.map(tarea => `<li>${tarea}</li>`).join("");
// "<li>Comprar pan</li><li>Estudiar</li><li>Hacer ejercicio</li>"

console.log(listaString);


const datosAPI = [
{ user_name: "Ana", user_age: 25 },
{ user_name: "Luis", user_age: 30 }
];

const normalizados = datosAPI.map(item => ({
nombre: item.user_name,
edad: item.user_age
}));

  
//--REDUCE para generar objetos o arrays "complejos" o estructurados
const personas = [
  { nombre: "Ana", ciudad: "Madrid" },
  { nombre: "Luis", ciudad: "Barcelona" },
  { nombre: "María", ciudad: "Madrid" }
];

const agrupadoPorCiudad = personas.reduce((acumulador, persona) => {
  // Obtener la ciudad actual
  const ciudad = persona.ciudad;

  // Si la ciudad no existe en el acumulador, crear un arreglo vacío
  if (!acumulador[ciudad]) {
    acumulador[ciudad] = [];
  }

  // Añadir el nombre al arreglo de la ciudad
  acumulador[ciudad].push(persona.nombre);

  return acumulador;
}, {}); // {} es el valor inicial del acumulador

console.log(agrupadoPorCiudad);
// Resultado:
// {
//   Madrid: ["Ana", "María"],
//   Barcelona: ["Luis"]
// }

// Alternativa con Object.groupBy():

const agrupadoNativo = Object.groupBy(personas, persona => persona.ciudad);
console.log(agrupadoNativo)

//Tareas usando reduce():

//Calcula el ingreso total (suma de cantidad * precio de todas las ventas).

//Encuentra el producto con mayor cantidad vendida.

//Cuenta cuántas veces se vendió cada producto (objeto con productos y sus cantidades totales).

//Calcula el precio promedio de todos los productos (sin repetir).


  const ventas = [
    { nombreProducto: "Laptop", cantidad: 2, precio: 999 },
    { nombreProducto: "Mouse", cantidad: 5, precio: 25 },
    { nombreProducto: "Teclado", cantidad: 3, precio: 75 },
    { nombreProducto: "Monitor", cantidad: 1, precio: 300 },
    { nombreProducto: "Mouse", cantidad: 2, precio: 25 }
  ];

//Calcular precio promedio de todos los productos (sin repetir )


//// A partir del array dado crear otro sin producto //repetido, se puede
// dejar la primera ocurrencia
// Manera tradicional
let productoRepetido = ventas[0].producto
const arrayNoRepetidos = []

function estaRepetido (nombreDeUnProducto) {
    for (let i=0; i<arrayNoRepetidos.length; i++){
        if (arrayNoRepetidos[i].nombreProducto===nombreDeUnProducto){
            return true
        }
    }
    return false; //no se encontró ese nombre en el array, como consecuencia deberá [**] incluirse el producto con ese "nombreDeUnProducto"
                  //en el arrayNoRepetidos.
}
//recorrido principal en el array de productos, llamado "ventas":

for (let j=0; j<ventas.length; j++){
    
    if (!estaRepetido(ventas[j].nombreProducto)){
        arrayNoRepetidos.push(ventas[j]) //hago lo indicado [**]
    }
}

console.log(arrayNoRepetidos)





