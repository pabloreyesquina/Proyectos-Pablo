const usuario = {
    id: 1,
    nombre: "Pablo"
};

const pedidos = [
    { id: 101, idUsuario: 1, cantidad: 2, precio: 20 },
    { id: 102, idUsuario: 2, cantidad: 3, precio: 10 },
    { id: 103, idUsuario: 1, cantidad: 1, precio: 10 },
    { id: 104, idUsuario: 2, cantidad: 1, precio: 30 },
    { id: 105, idUsuario: 1, cantidad: 1, precio: 40 }
];



function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        if (usuario.id === id) {
            resolve(usuario);
        } else {
            reject("Usuario no encontrado");
        }
    });
}

function obtenerPedidos(_id) {
    return new Promise((resolve) => {
        let pedidosDeEseUsuario = [];
        
        pedidos.forEach(element => {
            if (element.idUsuario === _id) {
                pedidosDeEseUsuario.push(element);
            }
        });
        resolve(pedidosDeEseUsuario);
    });
}

function obtenerDetalles(idPedido) {
    return new Promise((resolve) => {
        let pedidoEncontrado = null;

        pedidos.forEach(element => {
            if (element.id === idPedido) {
                pedidoEncontrado = element;
            }
        });
        resolve(pedidoEncontrado);
    });
}

function calcularTotal(detalles) {
    return new Promise((resolve) => {
        
        const total = detalles.cantidad * detalles.precio;
        resolve(total);
    });
}

obtenerUsuario(1)
  .then(usuario => {
    console.log('Usuario:', usuario.nombre)
    return obtenerPedidos(usuario.id) // Devolvemos la siguiente Promise
  })
  .then(pedidos => {
    console.log('Pedidos:', pedidos)
    return obtenerDetalles(pedidos[0].id) // Devolvemos la siguiente Promise
  })
  .then(detalles => {
    console.log('Detalles:', detalles)
    return calcularTotal(detalles) // Devolvemos la siguiente Promise
  })
  .then(total => {
    console.log('Total:', total)
    // ¡Terminamos! Sin pirámides, sin anidamiento
  })
  .catch(error => {
    // Un solo .catch() maneja TODOS los errores de toda la cadena
    console.log('❌ Error en cualquier paso:', error)
  })
