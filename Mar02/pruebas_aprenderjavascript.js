function repetirAccion(veces, accion) {
  for (let i = 0; i < veces; i++) {
    accion(i)
  }
}

// Diferentes acciones
repetirAccion(3, function(numero) {
  console.log('Iteración número: ' + numero)
})

repetirAccion(5, function(numero) {

  console.log('⭐'.repeat(numero + 1))
})


const sumar = function(a, b) { return a + b; };

console.log (sumar(3,4))

const sumar2 = (a,b)=> a+b;
console.log (sumar2(5,5))
