/* Crea un conversor de calificaciones que:
Pida al usuario una nota numérica (0-100) con prompt()'
Convierte la nota a letra según:
90-100: A

80-89: B

70-79: C

60-69: D

0-59: F

Implementa la solución de dos formas:

Switch

Operadores ternario

Que la letra se muestre en un 'alert()' */


/* Con switch */
/* let nota = parseInt(prompt("Introduce la nota: "));
let letra;
if (isNaN(nota) || nota < 0 || nota > 100) { alert("Error: Introduce un número válido entre 0 y 100");
}
else{
switch (true) {
        case (nota >= 90): 
            letra = "A";        
            break;
        case (nota >= 80):
            letra = "B";        
            break;
        case (nota >= 70):
            letra = "C";        
            break;
        case (nota >= 60):
            letra = "D";        
            break;
        default:
            letra = "F";
            break;
    }
    alert("Tu calificación es: " + letra);
} */

/* Con ternario */
/* un solo intento si la puntuación es un número: */

/* let nota = parseInt(prompt("Introduce la nota: "));
let letra;
if (isNaN(nota) || nota < 0 || nota > 100) { alert("Error: Introduce un número válido entre 0 y 100");
}
else{
    let letra = (nota>=90) ? "A":
                (nota>=80) ? "B":
                (nota>=70) ? "C":
                (nota>=60) ? "D":"F";
    alert("Tu calificación es: " + letra);
}
 */


let nota = parseInt(prompt("Introduce la nota: "));
let letra;
while (isNaN(nota)){]
    nota= parseInt(prompt("Escriba una puntuación Válida: "))
}
    letra = (nota>=90) ? "A":
                (nota>=80) ? "B":
                (nota>=70) ? "C":
                (nota>=60) ? "D":"F";
    alert("Tu calificación es: " + letra);
}
}