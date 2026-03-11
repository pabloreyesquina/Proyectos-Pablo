/* Implementa una calculadora con callbacks para la operación y mostrar resultado.

El usuario introduce dos números y una operación.

Con un switch se llama a la función 'calcular' con un callback para definir cómo mostrar el resultado y otro para definir la operación.

Los callbacks pueden ser nombrados, anónimos o funciones arrow. */

function calcular(num1, num2, operacion, callbackMostrar) {
    const resultado = operacion(num1, num2);
    callbackMostrar(resultado);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function mostrarConsola(resultado) {
    console.log("El resultado es: " + resultado);
}

/* No lo he sabido hacer */


/* Ejemplo IA 1*/

function aviso(){
    console.log("Proceso terminado")    
};

setTimeout (aviso,4000);

/* Ejemplo IA 2*/

function aviso(nombre){
    console.log("Proceso terminado para " + nombre)    
};

setTimeout (aviso, 4000, nombre);

new Promise