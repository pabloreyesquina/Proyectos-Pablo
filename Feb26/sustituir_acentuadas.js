/* Hacer una función de JS que sea capaz de reemplazar la vocales acentuadas en un texto por vocales sin acentuar.
En primer lugar probar con una palabra con tildes, por ejemplo "INFORMACIÓN", 
y a través de un patrón que se despliega en un SWITCH permite hacer el intercambio. */

let text = "INFORMACIÓN";
text = text.toLowerCase();
console.log(text)

let pattern = /áéíóúÁÉÍÓÚ/;
let result = pattern.test(text)
switch (result) {
    case true:
        
        break;

    default:
        break;
}


console.log(result);