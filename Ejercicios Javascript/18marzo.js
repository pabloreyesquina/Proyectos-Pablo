// Con objetos:
const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "María", edad: 28 },
    { id: 4, nombre: "Pedro", edad: 32 },
    { id: 5, nombre: "Sofía", edad: 29 },
    { id: 6, nombre: "Juan", edad: 31 },
    { id: 7, nombre: "Marcela", edad: 27 },
    { id: 8, nombre: "Rosa", edad: 33 },
    { id: 9, nombre: "Fernando", edad: 35 },
    { id: 10, nombre: "Marina", edad: 24 },
    { id: 11, nombre: "Miguel", edad: 26 },
    { id: 12, nombre: "Gloria", edad: 23 },
    { id: 13, nombre: "Sandra", edad: 34 },
    { id: 14, nombre: "Carlos", edad: 36 },
    { id: 15, nombre: "Laura", edad: 22 },
    { id: 16, nombre: "Rafael", edad: 38 },
    { id: 17, nombre: "Elena", edad: 21 },
    { id: 18, nombre: "Rodrigo", edad: 40 },
    { id: 19, nombre: "Cristina", edad: 20 },
    { id: 20, nombre: "Mónica", edad: 41 },
    { id: 21, nombre: "Gabriel", edad: 19 },
    { id: 22, nombre: "Alicia", edad: 42 },
    { id: 23, nombre: "Andrés", edad: 18 },
    { id: 24, nombre: "María", edad: 43 },
    { id: 25, nombre: "Lucía", edad: 17 },
    { id: 26, nombre: "Santiago", edad: 45 },
    { id: 27, nombre: "Diana", edad: 16 },
    { id: 28, nombre: "Hugo", edad: 46 },
    { id: 29, nombre: "Estela", edad: 15 },
    { id: 30, nombre: "Francisco", edad: 47 },
    { id: 31, nombre: "Cecilia", edad: 14 },
    { id: 32, nombre: "Silvia", edad: 48 },
    { id: 33, nombre: "Marcos", edad: 13 },
    { id: 34, nombre: "Eduardo", edad: 49 },
    { id: 35, nombre: "Adriana", edad: 12 }
];

const usuario = usuarios.find(u => u.id === 2);

if (usuario !== undefined) {
    console.log(usuario); // { id: 2, nombre: "Luis", edad: 30 }
}

const noExiste = usuarios.findIndex(u => u.id === 99);

if (noExiste !== -1) {
    // Eliminar
    usuarios.splice(noExiste, 1);

    // O actualizar
    usuarios[noExiste].nombre = "Nuevo Nombre";
} else {
    console.log("No se encontró el usuario con ID 99");
}

//Eliminar el primer usuario cuyo nombre empiece por la letra "S":

const indiceLetra = usuarios.findIndex(u => u.nombre[0] === "S");
if (indiceLetra !== -1) {
    usuarios.splice(indiceLetra, 1);
}   

console.log(usuarios);

