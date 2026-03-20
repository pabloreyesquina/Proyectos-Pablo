export class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    toString() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;
    }
    estaDisponible() {
        return this.stock > 0;
    }
}