//Crea una función que retorne otra función. La función retornada multiplica su argumento por un valor fijo.

function crearMultiplicador(factor) {
    return function (num) {
        return num * factor;
    }
}






// Ejemplo de uso:
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5)); // 15


//Crea una función que maneje una lista de tareas. La lista debe ser privada 
// (no accesible directamente), debe retornar un objeto con métodos para:

//agregar(tarea)

//listar()

//completar (indice)

//pendientes(), devuelve cuántas hay sin completar.

function crearGestorTareas() {
    let lista = [];
    return {
        agregar: function (nombreTarea) {
            const objetoTarea = {
                tarea: nombreTarea,
                completada: false
            };
            lista.push(objetoTarea);
        },

        listar: function () {
            return lista;
        },

        completar: function (indice) {
            lista[indice].completada = true;
        },
        pendientes: function () {
            const tareasSinHacer = lista.filter(tarea => tarea.completada === false);
            return tareasSinHacer.length;
        }
    }
}

// Ejemplo de uso:
const misTareas = crearGestorTareas();
misTareas.agregar("Estudiar closures");
misTareas.agregar("Hacer ejercicios");
console.log(misTareas.listar());
misTareas.completar(0);
console.log(misTareas.pendientes()); // 1
console.log(misTareas.listar());