/* let listaDeTareas = [];
function addTask(texto) {
    listaDeTareas.push({
        nombre: texto,
        completada: false
    });
    console.log(`Tarea "${texto}" añadida.`);
}

function displayTasks(){
    console.log("LISTA DE TAREAS");
    let icono = tarea.completada ? "[X]":"[]]";

    console.log('${indice +1}. ${icono} ${tarea.nombre}');
});
} */

/* Tienes una lista de nombres y edades de los miembros de una familia.
Este script debe devolver el nombre y la edad del de menor edad de la familia, y también lo análogo para el de mayor edad. Ejemplo:
["Ana, 43, "Luis", 45, "Ricardo",16, "María", 11] -->
la info ["Maria", 11]-->menor
la info ["Luis", 45]-->mayor */

const familia = ["Ana", 43, "Luis", 45, "Ricardo", 16, "María", 11, "Joaquin", 99, "Pablo", 11];

let nombres = [];
let edades = [];

familia.forEach((valor, indice) => {
    if (indice % 2 === 0) {
        nombres.push(valor);
    } else {
        edades.push(valor);
    }
});

console.log(nombres);
console.log(edades);

let indiceMenor = 0;
let indiceMayor = 0;

edades.forEach((edad, i) => {
    if (edad < edades[indiceMenor]) {
        indiceMenor = i;
    }

    if (edad > edades[indiceMayor]) {
        indiceMayor = i;
    }
});


console.log(nombres[indiceMenor] + " " + edades[indiceMenor] + "] --> menor");
console.log(nombres[indiceMayor] + " " + edades[indiceMayor] + "] --> mayor");


/* Crear funciones la del máximo y el mínimo:*/

function buscarMinimo(lista) {
    let indiceMin = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < lista[indiceMin]) {
            indiceMin = i;
        }
    }
    return indiceMin;
}


function buscarMaximo (lista) {
    let indiceMax = 0;
    for (let i = 0; i<lista.length; i++){
        if (lista[i]>lista[indiceMax]){
            indiceMax = i;
        }
    }
    return indiceMax;
}


let posMenor= buscarMinimo(edades);
let posMayor= buscarMaximo(edades);

console.log("El menor es:" + nombres[posMenor]+ " ("+edades[posMenor] + ")");
console.log("El mayor es:" + nombres[posMayor]+ " ("+edades[posMayor] + ")");




