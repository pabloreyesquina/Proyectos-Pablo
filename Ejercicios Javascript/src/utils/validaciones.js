/* Src/utils/validaciones.js

Export función validarPrecio(precio) - debe ser > 0

Export función validarStock(stock) - debe ser => 0 */

export function validarPrecio(precio) {
    if (precio > 0) {
        return true;
    } else {
        return false;
    }
}

export function validarStock(stock) {
    if (stock >= 0) {
        return true;
    } else {
        return false;
    }       
}