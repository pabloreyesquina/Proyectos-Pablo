console.log("primer código en JS")
/* Para practicar if-else if-else*/

/* Determinar si un número es par o impar con la funcion resto */

/* let numero = 88;
if (numero%2===0)
    console.log("numero PAR")
else console.log("numero IMPAR")


let numero1 =76
let numero2 =156

if (numero1/numero2>0 && numero1/numero2<1){
    console.error("La división da de cociente 0")
}
else {
    console.log(`El resultado de dividir ${numero1} entre ${numero2} es ${numero1/numero2}`)
}

 */

/*                 
var dividendo = parseInt(prompt("Primer numero"));
var divisor  = parseInt(prompt("Primer numero"));
var cociente;
if (divisor != 0){
    cociente = dividendo/divisor;
    alert( dividendo + "/" + divisor + " = " + cociente);
}
else{
   alert("No puedes dividir entre 0");
} */


/* En un tramo de un rally los conductores no deben ir 
ni demasiado rápido ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, 
si la velocidad está entre 40 y 60 km/h 
el conductor pasa la prueba en caso contrario es descalificado. */

/* let longitudTramo = 3; //en kilómetros
let tiempoTramo = 0.05;//en horas
let descalificado;//variable booleana
//ejemplo de traza:
console.log(longitudTramo/tiempoTramo);
if (longitudTramo/tiempoTramo>=40 && longitudTramo/tiempoTramo<=60){
    descalificado = false;
    console.log("El conductor pasa la prueba");
}
else {
    descalificado = true;
    console.log("El conductor es descalificado");
} */

/* Tabla de multiplicar del 1 al 10 */

/* console.log(`${numero1} x ${numero2} = ${numero1*numero2}`); */

/* for (let numero1=1; numero1<=10; numero1++){
    for (let numero2=1; numero2<=10; numero2++){
        console.log(`${numero1} x ${numero2} = ${numero1*numero2}`);
    }
}
 */
let numero1 = 1;

while (numero1 <= 10) {
    console.log(`La tabla del ${numero1}`);
    let numero2 = 1;
    while (numero2 <= 10) {

        console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
        numero2++
    }

    numero1++
}