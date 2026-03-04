let estudiante = {
    nombre: "María",
    edad: 22,
    carrera: "Informática",
    nota: 8.5
};

// Notación de punto (recomendada)
// "Maria"
// 22
// "Informática"
/*
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.carrera);

// Notación de corchetes
console.log(estudiante["nombre"]); // "Maria"
console.log(estudiante["edad"]); // 22

// Útil con variables
let clave = "carrera";
console.log(estudiante[clave]); // "Informática"
console.log(estudiante)
*/

//-----------------------------
/*let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

console.log("Original:", coche);

// Modificar propiedades existentes
coche.año = 2023;
coche.marca = "Honda";

// Añadir nuevas propiedades
coche.color = "azul";
coche.precio = 25000;
coche.vendido = false;

console.log("Modificado:", coche);
// {marca: "Honda", modelo: "Corolla", año: 2023, 
// color: "azul". precio: 2500, vendido: false}

// Eliminar propiedades
delete coche.vendido;
console.log("Sin vendido:", coche);
*/
// EJERCICIO: Crear el objeto familia, tendrá la clave "miembros" 
// y será de 4 miembros, donde se entiende que cada miembro es un 
// objeto como se ha definido persona. O sea previamente hay que
// definir 4 personas y luego integrarlas como valor para la clave
// miembros (array). Además el objeto familia tendrá una clave:
// dirección (string), telefono (string), CP (string), renta (number),
// superficie_vivienda (number)
const madre = {
    nombre: "Susana",
    edad: 40,
    mujer: true,
    //    obligado_tributario: true
}
const padre = {
    nombre: "Camilo",
    edad: 44,
    mujer: false,
    //    obligado_tributario: true
}
const hijo1 = {
    nombre: "Pedro",
    edad: 14,
    mujer: false,
    //    obligado_tributario: false
}
const hijo2 = {
    nombre: "Lara",
    edad: 12,
    mujer: true,
    //    obligado_tributario: true
}
const familia = {
    miembros: [madre, padre, hijo1, hijo2],
    direccion: "C/ La Oca 32, Zaragoza",
    telefono: "976123456",
    CP: "50008",
    renta: 45000,
    superficie_vivienda: 90
}
console.log(familia)
// el tiempo, los hijos crecen y las edades se modifican.
// Hacer una función que agregue una cantidad (n) años a las edades
// de los miembros de la famila.
function añadirAños(n) {
    familia.miembros.forEach((miembro) => { miembro.edad += n; });
}
añadirAños(3);
console.log(familia)

// el catastro actualiza información y hace añadir a los ficheros
// el campo precio de la vivienda
familia.precio_vivienda = 300000
console.log(familia)
// Por política social a cada mujer de la familia se le da
// un bono de 2000 euros. Actualizar esta situación en la familia
function añadirBono(n) {
    familia.miembros.forEach((miembro) => {
        if (miembro.mujer) {
            miembro.bono = n
        }
    });
}
añadirBono(2000);
console.log(familia)
const clave = "precio_vivienda"
if (clave in familia){
    console.log(`El valor asociado a ${clave} 
        de la vivienda es: ${familia[clave]}`)
}
else{
    console.log(`No se dispone de información 
        para la familia de ${clave}`);
}
// Se quiere conceder un bono a cada mujer si no lo tiene ya,
// la familia se incrementa con 3 miembros 2 mujeres, y 1 que no.
const nuevoMiembro = {

}
nuevoMiembro.mujer = true;
nuevoMiembro.edad = 1;
nuevoMiembro.acogida = true;
nuevoMiembro.tuvo_bono_año_anterior = false;
console.log(nuevoMiembro)
// integrarlo en la familia
familia.miembros.push(nuevoMiembro)
console.log(familia)
const prompt = require('prompt-sync')();
familia.miembros.forEach((miembro) => {
        if (undefined===miembro.nombre) {
            miembro.nombre = prompt("Escriba nombre para miembro: ")
        }
    });
console.log(familia)
const dineroSobrante = 1000
const otraClave = "bono"
familia.miembros.forEach((miembro) => {
        if (! (otraClave in miembro) || miembro[otraClave]<300  ) {
            miembro.bono_extra=dineroSobrante
        }
        else{
            delete miembro.bono;
        }
    });

console.log(familia)


