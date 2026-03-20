/* Export función formatearPrecio(precio) - devuelve "XX,00€"
Export función formatearStock(stock) - devuelve "X unidades" */

export function formatearPrecio(precio) {
    return precio.toFixed(2) + "€";
}

export function formatearStock(stock) {
    return stock + " unidades";
}


/* Importa todo lo necesario

Crea algunos productos

Agrégalos al gestor

Muestra la lista y el total */



