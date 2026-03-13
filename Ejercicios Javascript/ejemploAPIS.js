/* async function obtenerClima(ciudad) {
  const btnCargar = document.getElementById("btnCargar");
  const ak = ""
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`);
  const datos = await response.json();
  document.getElementById('temperatura').textContent = datos.main.temp;
} */


//PARA PROBAR CON API-KEYS:

const API_KEY = ""
const url_base = "https://api.openweathermap.org/data/2.5/weather?q="
const url_ciudad_appid = "London,uk&APPID="
const url_completa = url_base + url_ciudad_appid + API_KEY

console.log(url_completa)



/* async function obtenerTodosLosDatos() {
    try {
        const [latitud, longitud] = await Promise.all([
            fetch('/api/usuarios').then(r => r.json()),
            fetch('/api/productos').then(r => r.json()),
            fetch('/api/pedidos').then(r => r.json())
        ]);
return { usuarios, productos, pedidos };
    } catch (error) {
        console.error('Error en alguna de las APIs:', error);

    } */

async function obtenerClima() {
    try {
        // Hacemos la petición a la API
        const respuesta = await fetch(url_completa);
        
        // Convertimos la respuesta "cruda" a un objeto JS (JSON)
        const datos = await respuesta.json();

        // Si la respuesta no es OK (ej: ciudad mal escrita), lanzamos error
        if (!respuesta.ok) {
            throw new Error(`Error: ${datos.message}`);
        }

        // 3. EXTRACCIÓN DE DATOS (Lo que me pediste)
        // Navegamos por el edificio: datos -> coord -> lat/lon
        const latitud = datos.coord.lat;
        const longitud = datos.coord.lon;
        
        // Otros datos útiles que suelen pedir en exámenes:
        const ciudadNombre = datos.name;
        const temperatura = datos.main.temp;
        const descripcion = datos.weather[0].description; // Ojo al [0] porque es un array

        // Devolvemos un objeto con todo lo que hemos extraído
        return {
            latitud,
            longitud,
            ciudadNombre,
            temperatura,
            descripcion
        };

    } catch (error) {
        console.error("Hubo un fallo en la petición:", error);
    }
}

// 4. EJECUCIÓN (Para ver los resultados en la consola)
obtenerClima().then(resultado => {
    if (resultado) {
        console.log("--- DATOS EXTRAÍDOS ---");
        console.log(`Ciudad: ${resultado.ciudadNombre}`);
        console.log(`Coordenadas: Lat ${resultado.latitud}, Lon ${resultado.longitud}`);
        console.log(`Clima: ${resultado.descripcion}`);
        console.log(`Temperatura: ${resultado.temperatura}K`);
    }
});