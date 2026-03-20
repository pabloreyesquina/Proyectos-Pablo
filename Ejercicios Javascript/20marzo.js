//Crea una clase Temperatura que:

//Almacene la temperatura en Celsius (privado).

//Tenga getter/setter para celsius con validación (-273 a 1000).

//Tenga getter/setter para fahrenheit que convierte automáticamente.

//Tenga getter/setter para kelvin que convierte automáticamente.

//Tenga getter esCongelacion que devuelve true si temp <= 0°C.
//Tenga getter esEbullicion que devuelve true si temp >= 100°C. 

// Fórmulas:
  // F = C * 9/5 + 32
 // K = C + 273.15

class Temperatura{
    #tempCelsius;

    constructor(tempCelsius){
        this.tempCelsius = tempCelsius;
    }
    get tempCelsius(){
        return this.#tempCelsius;
    }
    set tempCelsius(tempCelsius){
        if(tempCelsius < -273 || tempCelsius > 1000){
            console.log("Temperatura fuera de rango");
        }
        else{
            this.#tempCelsius = tempCelsius;
        }
    }

    get tempFahrenheit(){
        return this.#tempCelsius * 9/5 + 32;
    }
    set tempFahrenheit(tempFahrenheit){
        this.#tempCelsius = (tempFahrenheit - 32) * 5/9;
    }

    get tempKelvin(){
        return this.#tempCelsius + 273.15;
    }
    set tempKelvin(tempKelvin){
        this.#tempCelsius = tempKelvin - 273.15;
    }

    get esCongelacion(){
        return this.#tempCelsius <= 0;
    }
    get esEbullicion(){
        return this.#tempCelsius >= 100;
    }

}

const temperatura2 = new Temperatura(-5000);
console.log(temperatura2.tempCelsius);
console.log(temperatura2.tempFahrenheit);
console.log(temperatura2.tempKelvin);
console.log(temperatura2.esCongelacion);
console.log(temperatura2.esEbullicion);

const temperatura = new Temperatura(25);
console.log(temperatura.tempCelsius);
console.log(temperatura.tempFahrenheit);
console.log(temperatura.tempKelvin);
console.log(temperatura.esCongelacion);
console.log(temperatura.esEbullicion);

temperatura.tempCelsius = 110;
console.log(temperatura.tempFahrenheit);
console.log(temperatura.tempKelvin);
console.log(temperatura.esCongelacion);
console.log(temperatura.esEbullicion);

console.log(temperatura);

//Otro ejemplo le Gemini

/* Imagina que estás programando un robot. El robot tiene una batería interna que debe estar protegida.

Tu objetivo es crear una clase llamada Robot que cumpla esto:

Propiedad Privada: Crea una propiedad llamada #energia.

Constructor: Debe recibir una energía inicial y guardarla en el #energia.

Getter bateria: Cuando alguien consulte .bateria, debe devolver un string que diga: "Nivel de energía al [valor]%" (usa Template Literals).

Setter bateria: * Si el valor que le pasan es menor que 0, debe decir por consola: "Error: Energía demasiado baja" y poner el #energia a 0 automáticamente.

Si el valor es mayor que 100, debe decir: "Error: Sobrecarga" y poner el #energia a 100.

Si el valor es correcto (entre 0 y 100), simplemente lo guarda.

Getter estado: (Solo lectura, sin setter).

Si la energía es mayor a 20, devuelve "Operativo".

Si es 20 o menos, devuelve "Batería baja". */


class Robot {
    #energia
    constructor(energiaInicial) {
        this.energiaInicial= energiaInicial
    }

    get bateria(){
        return this.bateria
    }
}