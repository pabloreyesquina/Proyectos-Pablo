/* 

async function obtenerCita() {
try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    console.log ("Cita: ", data[0].text);
    console.log ("Author: ", data[0].author);
    let contador = 1;
    data.forEach(element => {
        console.log(`Cita ${contador}`);
        console.log("Autor: " + element.author);
        console.log("Cita: " + element.text);
        contador++;
    });
    }
    catch (error) {
        console.log ("Algo ha salido mal Error--> ", error.message)
    }
}

obtenerCita(); */



async function obtenerClima(ciudad) {
  const btnCargar = document.getElementById("btnCargar");
  const ak = "1bc8cb233e8dee7eb57a5aa57eb5842e"
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`);
  const datos = await response.json();
  document.getElementById('temperatura').textContent = datos.main.temp;
}

