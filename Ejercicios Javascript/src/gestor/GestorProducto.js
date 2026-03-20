/* Exporta clase GestorProducto

Propiedad: array de productos

Método: agregar(producto) - valida antes de agregar

Método: listar() - devuelve strings formateados

Método: obtenerTotal() - suma de precio * stock de todos */

import { validarPrecio, validarStock } from "../utils/validaciones.js";  
import { formatearPrecio, formatearStock } from "../utils/formateo.js";

export class GestorProducto {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        if (validarPrecio(producto.precio) && validarStock(producto.stock)) {
            this.productos.push(producto);
        }
        else {
            console.log("Producto no valido");
        }
    }

    listar() {
        return this.productos.map(producto => {
            return `Nombre: ${producto.nombre}, Precio: ${formatearPrecio(producto.precio)}, Stock: ${formatearStock(producto.stock)}`;
        });
    }

    obtenerTotal() {
        const total = this.productos.reduce((acumulador, producto) => {
            return acumulador + producto.precio * producto.stock;
        }, 0);
        return formatearPrecio(total);
    }
}