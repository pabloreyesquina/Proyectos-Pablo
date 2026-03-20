/* Importa todo lo necesario
Crea algunos productos

Agrégalos al gestor

Muestra la lista y el total */

import { GestorProducto } from "./gestor/GestorProducto.js";
import { Producto } from "./modelos/Producto.js";


const miGestor = new GestorProducto();

const producto1 = new Producto("Laptop", 999, 5);
miGestor.agregar(producto1);        

const producto2 = new Producto("Smartphone", 499, 10);          
miGestor.agregar(producto2);

console.log(miGestor.listar());
console.log(miGestor.obtenerTotal()); 