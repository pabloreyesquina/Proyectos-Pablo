/* Tienes una lista de puntuaciones de un examen.
Objetivo:

Usa un método de array para obtener solo las notas que sean mayores o iguales a 5 (aprobados).

Guarda ese nuevo array de aprobados en el LocalStorage bajo la clave "aprobados".

Pista: Recuerda que para guardar un array en LocalStorage debes convertirlo a string primero. */

const notas = [3, 8, 5, 4, 10, 2, 7];
// Tu código aquí...

const aprobados = notas.filter((nota) => nota >= 5);
localStorage.setItem("aprobados", JSON.stringify(aprobados));

console.log(aprobados);





/* Crea una función obtenerPost que sea asíncrona.

Usa fetch para llamar a esta URL: https://jsonplaceholder.typicode.com/posts/1

Captura el título (title) de la respuesta y muéstralo en un h1 dentro de la página.

Usa un bloque try/catch para manejar posibles errores. */

async function obtenerPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        const title = data.title;
        const h1 = document.createElement("h1");
        h1.textContent = title;
        document.body.appendChild(h1);
    } catch (error) {
        console.error("Error al obtener el post:", error);
    }
}

obtenerPost();


/* Imagina que recibes este objeto de una base de datos con mucha información basura.

Usa destructuring para extraer nombre y email.

Usa el spread operator (...) para guardar todo el resto de propiedades en una variable llamada detallesTecnicos.

Crea una clase llamada Usuario cuyo constructor reciba ese nombre y email y tenga un método presentarse() que devuelva el string: "Soy [nombre], contactame en [email]". */

const apiRespuesta = {
    id: 55,
    nombre: "Pablo",
    email: "pablo@correo.com",
    token: "abc123xyz",
    ultimoLogin: "2024-03-20",
    ip: "192.168.1.1"
};

const { nombre, email, ...detallesTecnicos } = apiRespuesta;

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    presentarse() {
        return `Soy ${this.nombre}, contactame en ${this.email}`;
    }
}

const usuario = new Usuario(nombre, email);
console.log(usuario.presentarse());



