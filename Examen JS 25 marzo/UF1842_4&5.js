//Pablo Alvarez Llamas

//Ejercicio 4

async function obtenerPersonaje() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.error('Error: Personaje no encontrado', error);
    }
}
obtenerPersonaje();

//Ejercicio 5

class Personaje {
    constructor() {
        this.nombre = "";
        this.url = "";
    }

    async obtenerPersonaje() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/1');
            const data = await response.json();

            this.nombre = data.name; 
            
            this.url = data.episode[0];

            console.log("Personaje actualizado:", this.nombre);
            console.log("Primer episodio:", this.url);

        } catch (error) {
            console.error('Error: Personaje no encontrado', error);
        }
    }
}

const miPersonaje = new Personaje();
miPersonaje.obtenerPersonaje();