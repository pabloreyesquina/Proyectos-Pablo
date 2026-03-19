class Rectangulo {
    constructor(_ancho, _alto, _apariencia) {
        this.ancho = _ancho;
        this.alto = _alto;
        this.apariencia = _apariencia;
    }
    area() {
        return this.ancho * this.alto
    }
}

class Apariencia {
    constructor(_color, _textura) {
        this.color = _color;
        this.textura = _textura;
    }
}

const miAlto = 2; miAncho = 5; miApariencia = { color: "azul", textura: "punteada" };

const miRectangulo = new Rectangulo(miAncho, miAlto, miApariencia);

console.log(`El área del rectángulo es: ${miRectangulo.area()}`);

console.log(`Las caracteristicas del rectángulo son: ${miRectangulo.apariencia.color} y ${miRectangulo.apariencia.textura}`);



const miAparienciaConClase = new Apariencia("verde", "rayas diagonales");
const otroRectangulo = new Rectangulo(miAlto, miAncho, miAparienciaConClase);

console.log(`El área del rectángulo es: ${otroRectangulo.area()}`);

console.log(`Las caracteristicas del rectángulo son: ${otroRectangulo.apariencia.color} y ${otroRectangulo.apariencia.textura}`);

//Crea una clase Libro con:
//Constructor que recibe: titulo, autor, paginas.

//Propiedad leido inicializada en false.

//Método marcarComoLeido() que cambia leído a true.

//Método info() que devuelve string con toda la información.

/* Ejemplo de uso:
  const libro = new Libro("1984", "George Orwell", 328);
  console.log(libro.info()); 
  // "1984 por George Orwell - 328 páginas (No leído)"
  
  libro.marcarComoLeido();
  console.log(libro.info()); 
  // "1984 por George Orwell - 328 páginas (Leído)" */

class Libro {
    constructor(_titulo, _autor, _paginas) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
        this.leido = false;
    }
    marcarComoLeido() {
        this.leido = true;
    }
    info() {
        return `${this.titulo} por ${this.autor} - ${this.paginas} páginas (${this.leido ? "Leído" : "No leído"})`;
    }
}

const miLibro = new Libro("1984", "George Orwell", 328);
console.log(miLibro.info());
miLibro.marcarComoLeido();
console.log(miLibro.info());


//Clases básicas: Crea una clase CuentaBancaria con:

//Constructor que recibe: titular, saldoInicial (defecto 0).

//Método depositar(cantidad) que aumenta el saldo.

//Método retirar(cantidad) que disminuye el saldo pero solo si hay suficiente saldo

//Método consultarSaldo() que muestra el saldo actual.

//Asegúrate de validar: No se puede depositar cantidad negativa, No se puede retirar más de lo que hay en el saldo.

class CuentaBancaria {
    constructor(_titular, _saldoInicial = 0) {
        this.titular = _titular;
        this.saldo = _saldoInicial;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}

const miCuenta = new CuentaBancaria("Pablo", 1000);
console.log(miCuenta.consultarSaldo());
miCuenta.depositar(100);
console.log(miCuenta.consultarSaldo());
miCuenta.retirar(500);
console.log(miCuenta.consultarSaldo());
miCuenta.retirar(1000);
console.log(miCuenta.consultarSaldo());

console.log(miCuenta)

//PROPUESTA DE EJERCICIO
//Crear una clase para objetos persona que tenga como atributos: nombre, apellidos, NIF. crearle internamente un método estático que valide la letra del NIF. 
//Que como método no estático tenga info() que dará toda la información de un objeto de la clase Persona

//No está bien

class Persona {
    constructor(_nombre, _apellidos, _NIF) {
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.NIF = _NIF;
    }
    static validarNIF(_NIF) {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let letra = _NIF.substring(8, 9);
        let num = _NIF.substring(0, 8);
        let resto = num % 23;
        let letraCalculada = letras.charAt(resto);
        return letraCalculada == letra;
    }
    info() {
        return `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, NIF: ${this.NIF}`;
    }
}  

const persona = new Persona("Pablo", "García", "12345678A");
console.log(persona.info());
console.log(Persona.validarNIF(persona.NIF));


//Ejercicio clases

class Animal {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    hablarSonido() {
        console.log("Hago un sonido");
    }
}

class Perro extends Animal {
    constructor(_raza) {
        this.raza = _raza;
    }
    ladrar() {
        console.log("Guau guau");
    }           
}
