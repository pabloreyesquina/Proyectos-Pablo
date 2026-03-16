function sumaDias(miFecha, numDias) {

    miFecha.setDate(miFecha.getDate() + numDias);

    return miFecha;

}




console.log(sumaDias(new Date(), 125))

//Programa una función tal que dadas dos fechas , calcule el numero de días transcurridos como días enteros, prescindiendo de horas-minutos y segundos.


function diasEntreFechas(fechaInicial, fechaFinal) {
    let diferenciaMs = fechaFinal - fechaInicial;
    let resultado = diferenciaMs / (1000 * 60 * 60 * 24);

    // Esto elimina los decimales si los hubiera
    return resultado - (resultado % 1);
}

const inicio = new Date();
const fin = new Date("2026-10-05");

const dias = diasEntreFechas(inicio, fin);

console.log("La diferencia de días es:", dias);