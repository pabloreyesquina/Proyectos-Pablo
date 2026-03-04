/* Crea un sistema que gestione una lista de empleados con:
Array de objetos empleado (nombre, puesto, salario, activo).
Función para añadir nuevos empleados.
Función para mostrar todos los empleados activos.
Función para calcular el gasto total en nóminas.
Función para buscar empleado por nombre.
Extensiones: Filtrar por puesto, Ordenar por salario y Dar de baja empleados (cambiar a no activos). */

let empleados = [
    { nombre: "Ana", puesto: "Dev", salario: 3500, activo: true },
    { nombre: "Luis", puesto: "Diseño", salario: 2800, activo: false },
    { nombre: "Marta", puesto: "Data", salario: 4200, activo: true },
    { nombre: "Hugo", puesto: "Soporte", salario: 1800, activo: true },
    { nombre: "Sara", puesto: "QA", salario: 3100, activo: false }
];

function añadirEmpleado(nombre, puesto, salario) {
    const nuevoEmpleado = {
        nombre: nombre,
        puesto: puesto,
        salario: salario,
        activo: true
    };

    empleados.push(nuevoEmpleado);
    console.log(`¡${nombre} ha sido añadido con éxito!`);
}

añadirEmpleado("Pablo", "conserje", 3000)
añadirEmpleado ("Pablo", "ayudante", 2000)
añadirEmpleado ("Juan", "Data", 4000)

function mostrarActivos() {
    let contadorActivos = 0;
    empleados.forEach(empleado => {
        if (empleado.activo === true) {
            contadorActivos++;
        }
    });
    console.log("Total de empleados activos:", contadorActivos);
    
    empleados.forEach(empleado=> {
        if(empleado.activo===true){
            console.log(empleado);
        }
    })
}

mostrarActivos()

function calcularTotalNominas() {
    let totalnominas = 0;
    empleados.forEach(empleado => {
        if (empleado.activo) {
            totalnominas = totalnominas + empleado.salario;
        }
    });
    console.log("Gasto total en nóminas = " + totalnominas)
}

calcularTotalNominas()


function buscarEmpleado(nombreABuscar) {
    let encontrado = false; 

    empleados.forEach(empleado => {
        if (empleado.nombre === nombreABuscar) {
            console.log("Encontrado:" + nombreABuscar, empleado); 
            encontrado = true;    
        }
    });
    
    if (encontrado === false) {
        console.log("No hay un empleado con ese nombre");
    }
}

buscarEmpleado ("Pablo")


/* Buscar usando find*/

function buscarConFind(nombreABuscar) {    
    const empleadoEncontrado = empleados.find(empleado => empleado.nombre === nombreABuscar);

    if (empleadoEncontrado) {
        console.log("Empleado encontrado:", empleadoEncontrado);
    } else {
        console.log("No hay ningún empleado con ese nombre");
    }
}

buscarConFind("Ana")

function filtrarPorPuesto (puestoABuscar){
    let puestoencontrado =false;

    empleados.forEach(empleado=>{
        if (empleado.puesto === puestoABuscar){
            puestoencontrado = true;
            console.log(empleado)
        }
    })
    if (puestoencontrado ===false) {
        console.log("No hay empleados con ese puesto");
    }
}

filtrarPorPuesto ("Data")
filtrarPorPuesto ("CEO")

//Quedo lo de filtrar por puesto, Ordenar por salario y Dar de baja empleados (cambiar a no activos)


