const readline = require('readline');

const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stdout,
});

//Variables con valores dados por consola por usuario:
let edad;
rl.question('Introduzca dato: ', (respuesta)=> {
    edad = respuesta
    console.log(edad);
    rl.close(); //Importante cerrar la interfaz

});