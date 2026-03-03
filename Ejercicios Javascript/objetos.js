let estudiante = {
nombre: "Maria",
edad: 22,
carrera: "Informática",
nota: 8.5

};

// Notación de punto (recomendada)
// "Maria"
// 22
console.log(estudiante.carrera); // "Informática"

// Notación de corchetes
console.log(estudiante["nombre"]); // "Maria"
console.log(estudiante["edad"]); // 22

// Útil con variables
let propiedad = "carrera";
console.log(estudiante[propiedad]); // "Informática"

console.log(estudiante.nombre);
console.log(estudiante.edad);


let coche = {
marca: "Toyota",
modelo: "Corolla",
año: 2020

};

console.log("Original:", coche);

// Modificar propiedades existentes
coche.año = 2023;
coche.marca = "Honda";

// Añadir nuevas propiedades
coche.color = "azul";
coche.precio = 25000;
coche.vendido = false;

console.log("Modificado:", coche);
// {marca: "Honda", modelo: "Corolla", año: 2023, color: "azul". precio: 2500,vendido: false}

// Eliminar propiedades
delete coche.vendido;
console.log("Sin vendido:", coche);


/* Crear el objeto familia, tendrá la clave "miembros" y será de 4 miembros, donde se entiende que cada miembor es un objeto como se ha definido
persona. O sea previamente hay que definir 4 personas y luego integrarlas como valor para la clave miembros (array). Además el objeto familia
tendrá una clave: dirección (string), telefono (string), CP (string), renta (number), superficie_vivienda (number)*/

const persona1 = {nombre:"Pablo", edad:38, mujer:false};
const persona2 = {nombre:"Juan", edad:68, mujer:false}
const persona3 = {nombre:"Laura", edad:35, mujer:true}
const persona4 = {nombre:"Ana", edad:64, mujer:true}


const familia = {
    miembros: [persona1, persona2, persona3, persona4],
    "dirección":"c/ Manuel Ricard 45, Zaragoza",
    telefono: "+3458754556",
    CP: "454455",
    renta: 50000,
    superficie_vivienda: 100
}


console.log(familia);


// el tiempo pasa y las edades se modifican. 
// Hacer la función que agrege una cantidad (n) años a las edades
// de los miembros

function modificarEdad(familia, n) {

    for (let i=0; i<familia.miembros.length; i++){
        familia.miembros[i].edad +=n;
    }   

}


modificarEdad(familia, 5);
console.log(familia);


/* El profesor lo hizo así: */

function añadirAños(n){
    familia.miembros.forEach((KKK)=>{KKK.edad+=n});
}
añadirAños(3);
console.log(familia)

/* el catastro actualiza información y hace añadir a los ficheros
el campo precio de la superficie_vivienda */

familia.precio_vivienda = 300000;
console.log(familia)

/* Por politica social a cada mujer de la familia se le da un bono de 2000 euros. Actualizar esta situación en la familia. */

function añadirBono(n) {
    familia.miembros.forEach((miembro)=>{
        if (miembro.mujer === true){
            miembro.bono =n
        }
    })
}

añadirBono (2000)
console.log(familia)