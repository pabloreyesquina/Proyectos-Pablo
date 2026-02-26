/* let edad = Number(prompt("Introduce tu edad: "));

if (edad <13){
    alert("¡Acceso denegado!");
}
else if (edad>=13 && edad <=17){
    alert  ("Acceso a contenido para adolescentes");
}
else if (edad>=18) {
    alert("¡Acceso completo");
    if (edad >=65){
        alert("¡Descuento senior!");
    }
} */



let edad = Number(prompt("Introduce tu edad: "));

if (edad <13){
    alert("¡Acceso denegado!");
}
else if (edad>=13 && edad <=17){
    alert  ("Acceso a contenido para adolescentes");
}
else {
    alert("¡Acceso completo");
    if (edad >65){
        alert("¡Descuento senior!");
    }
}


