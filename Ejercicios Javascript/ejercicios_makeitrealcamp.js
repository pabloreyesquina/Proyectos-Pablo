/* /* /* /* Escribir una función llamada contrasenaValida que reciba un string y retorne true 
si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false 
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false */

/* 
function solicitar() {
  let respuesta = prompt("Introduce contraseña: ")
  return respuesta;

}

function contrasenaValida(contrasena) {
  if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
    alert("Contraseña correcta");
    return true

  }
  else {
    alert("Contraseña incorrecta");
    return false;

  }
}
 */


/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */
/* 

function bmi(peso, altura) {
  let indice = peso / (altura ** 2);
  if (indice < 18.5) {
    return "Bajo de peso";
  } else if (indice <= 24.9) {
    return "Normal";
  } else if (indice <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
} */

/* Funcion flecha */

/* const bmi = (peso, altura) => {
  let indice = peso / (altura ** 2);
  if (indice < 18.5) return "Bajo peso";
  if (indice <= 24.9) return "Normal";
  if (indice <= 29.9) return "Sobrepeso";
  return "Obeso";

}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso" */


/* Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final. */


const sumarRango = (inicial, final) => {
  let suma = 0
  for (let i = inicial; i <= final; i++) {
    suma = suma + i;
  }
  return suma;

}


/* Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
 */

function numeroDeCaracteres(texto, letra) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i]===letra){
      contador++;
    }
    
  };
return contador;
}

console.log(numeroDeCaracteres("Esta modalidad le permitirá continuar navegando como hasta ahora. La aceptación de las cookies y tecnologías similares implicará la recogida y uso de su información de navegación con fines publicitarios y de personalización acorde a sus intereses. Esa publicidad es esencial para que podamos seguir ofreciendo contenido de calidad, servicios eficaces a los usuarios y una mejora en la experiencia de uso. Para ello, nosotros y nuestros 980 socios necesitamos su consentimiento para el tratamiento de datos personales (p. ej. identificadores únicos, datos de navegación) para los siguientes fines:"
  ,"e"
))

/* Mejorar para que de el número de repeticiones de cada letra del abecedario sin importar que sea mayuscula o minuscula */

const abecedario = "abcdefghijklmnñopqrstuvwxyz";
function analizaTexto(texto){
  texto=texto.toLowerCase();

  for (let i = 0; i < abecedario.length; i++) {
    let letra = abecedario[i];
    let cantidad = numeroDeCaracteres(texto, letra);
    console.log(letra + ": " + cantidad);
  }


}

analizaTexto("Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam dolorem ratione numquam, maiores minus molestiae ab exercitationem nam distinctio nesciunt ullam aliquid et iusto, beatae, facilis unde vitae vel?");



/* Mejorar para leer el archivo 'datos.txt'
const contenido = fs.readFileSync('datos.txt','utf8');
console.log(contenido); */

function accessoFichero(nombreFichero){
    const fs = require('fs');
    const contenido = fs.readFileSync(nombreFichero,'utf-8','r');
    console
}

/* No está acabado */


/* Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo. */

console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))


function imprimirMatriz (matriz) {
  for(let i =0; i<matriz.length; i++){  /* Para filas */
    for(let j=0;j<matriz[0].length; j++){/* Para columnas */
      console.log(matriz[i][j]);
    }
  }
}