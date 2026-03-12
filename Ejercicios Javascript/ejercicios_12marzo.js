/* getUser(1, onUser)

function onUser(user) {
  console.log("Usuario:", user.name)
  getPosts(user.id, onPosts)
}

function onPosts(posts) {
  console.log("Posts del usuario:", posts)
  getComments(posts[0].id, onComments)
}

function onComments(comments) {
  console.log("Comentarios del primer post:", comments)
  getLikes(comments[0].id, onLikes)
}

function onLikes(likes) {
  console.log("Likes del primer comentario:", likes)
  console.log("Fin del flujo de callbacks")
}
 */

/* const miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación que toma tiempo
  console.log('🔄 La Promise está pendiente...')
  
  setTimeout(() => {
    const exito = true // Cambia esto a false para ver el rechazo
    
    if (exito) {
      console.log('✅ Resolviendo la Promise...')
      resolve('¡Operación exitosa!') // Cumplimos la promesa
    } else {
      console.log('❌ Rechazando la Promise...')
      reject('Algo salió mal') // Rechazamos la promesa
    }
  }, 2000)
})

console.log('Promise creada:', miPromesa)

// Consumir la Promise
miPromesa
  .then(resultado => console.log('Resultado:', resultado))
  .catch(error => console.log('Error:', error)) */

//Ejemplo Gemini Cajero automático

/* const sacarDinero = (cantidad) => {
    return new Promise((resolve, reject) => {
        console.log("Procesando... consulte su saldo en pantalla.");

        setTimeout(() => {
            const saldoEnCuenta = 500;
            if (cantidad<=saldoEnCuenta) {
                resolve ("Aquí tiene su dinero")
            }else{
                reject ("Operación denegada")
            }

        }, 2000);
});

};

sacarDinero (400)
    .then((mensaje)=> {
        console.log("EXITO: ", mensaje);
    })
    .catch((error)=>{
        console.log("ERROR:", error);
    });
 */
//Ejemplo de Promises

// Misma funcionalidad pero con Promises - ¡Mucho más limpio!

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


//  Para que lo anterior tenga sentido debe existir el objeto usuario, y el array de pedidos siendo cada uno un objeto.


const usuario = {
    id: 1,
    nombre: "Pablo"
};

const pedidos = [
    {idUsuario:1, cantidad:1, precio:20},
    {idUsuario:2, cantidad:3, precio:10},
    {idUsuario:1, cantidad:1, precio:10},
    {idUsuario:2, cantidad:1, precio:30},
    {idUsuario:1, cantidad:1, precio:40}
];

function obtenerPedidos(_id){
    pedidosDeEseUsuario = new Array;
    pedidos.forEach(element => {
        if (element.idUsuario===_id){
            pedidosDeEseUsuario.push(element)
            }
    });
    return pedidosDeEseUsuario;

}

function obtenerDetalles () {


    return detalles
}

function calcularTotal() {


    return total
}
