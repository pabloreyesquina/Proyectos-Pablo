/* Crea una clase CarritoCompra que:

Tenga un array de productos vacío al inicio.

Tenga método agregarProducto(producto) que añade al array.

Tenga método eliminarProducto(nombreProducto) que lo quita.

Tenga método calcularTotal() que suma los precios.

Tenga método aplicarDescuento(porcentaje) al total.

Tenga método mostrarProductos() que lista todo. */

//Estructura de producto:


/* 
const producto = {
    nombre: "Laptop",
    precio: 999,
    cantidad: 1
};


class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
        if (productoExistente) {
            productoExistente.cantidad += (producto.cantidad);
        }
        else {
            this.productos.push(producto);
        }
    }

    eliminarProducto(nombreProducto, cantidadAEliminar = 1) {
        const indice = this.productos.findIndex(p => p.nombre === nombreProducto);

        if (indice !== -1) {
            const producto = this.productos[indice];
            producto.cantidad -= cantidadAEliminar;

            if (producto.cantidad <= 0) {
                this.productos.splice(indice, 1);
            }
        }
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }

    mostrarProductos() {
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }

}

const miCarrito = new CarritoCompra();

miCarrito.agregarProducto({ nombre: "Laptop", precio: 1000, cantidad: 1 });
miCarrito.agregarProducto({ nombre: "Laptop", precio: 1000, cantidad: 1 }); // Ahora sumará 2 unidades
miCarrito.agregarProducto({ nombre: "Mouse", precio: 25, cantidad: 1 });
miCarrito.mostrarProductos();
console.log(`El total es: ${miCarrito.calcularTotal()}`);
miCarrito.eliminarProducto("Laptop");

miCarrito.mostrarProductos();

const totalConDescuento = miCarrito.aplicarDescuento(10);
console.log(`El total con descuento es: ${totalConDescuento}`); */


/* Ahora te toca a tí
Crea una clase base Usuario con:
constructor(nombre, email).
método login() que muestra "Usuario [nombre] ha iniciado sesión".
método verPerfil() que muestra información del usuario.
Crea clase UsuarioAdmin que extiende Usuario:
constructor que además reciba nivel (1-3).
método login() que llame a super y añada " como admin".
método eliminarUsuario(usuario) específico de admin.
método verPerfil() que muestre también el nivel
Crea clase UsuarioEditor que extiende Usuario:
constructor que además reciba especialidad.
método publicarContenido(titulo) específico de editor.
método verPerfil() que muestre también la especialidad */

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    login() {
        return `Usuario ${this.nombre} ha iniciado sesión`;
    }    

    verPerfil() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    }
}

class UsuarioAdmin extends Usuario {
    constructor(nombre, email, nivel) {
        super(nombre, email);
        this.nivel = nivel;
    }

    login() {
        console.log(super.login() + " como admin");
    }

    eliminarUsuario(usuario) {
        console.log("Solo el admin puede hacer esto");
    }
}

class UsuarioEditor extends Usuario {
    constructor(nombre, email, especialidad) {
        super(nombre, email);
        this.especialidad = especialidad;
    }

    login() {
        console.log(super.login() + " como editor");
    }

    publicarContenido(titulo) {
        console.log("Solo el editor puede hacer esto");
    }
}





// Ejemplo de uso:
const admin = new UsuarioAdmin("Ana", "ana@example.com", 3);
const editor = new UsuarioEditor("Luis", "luis@example.com", "Frontend");

admin.login();
// "Usuario Ana ha iniciado sesión como admin"

editor.login();
// "Usuario Luis ha iniciado sesión"

admin.eliminarUsuario(editor);
// Solo el admin puede hacer esto

editor.publicarContenido("Mi artículo");
// Solo el editor puede hacer esto
