// 1. Capturamos los elementos del DOM
const formulario = document.getElementById("formularioPersona");
const contenedor = document.getElementById("contenedorTarjeta");
const boton = document.getElementById("botonGenerar");

// 2. Referencias a los inputs (Cuidado con los IDs exactos del HTML)
const nombreInput = document.getElementById("nombre");
const profesionInput = document.getElementById("profesion");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const ubicacionInput = document.getElementById("ubicacion"); // Con tilde, como en tu HTML

boton.addEventListener("click", function () {
    
    // Validamos que al menos haya un nombre antes de crear nada
    if (nombreInput.value.trim() === "") {
        alert("Por favor, introduce al menos un nombre.");
        return; 
    }

    // 3. Generamos el objeto persona con los datos actuales
    const persona = {
        nombre: nombreInput.value,
        profesion: profesionInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        ubicacion: ubicacionInput.value
    };

    // 4. CONSTRUCCIÓN DE LA TARJETA (Sin usar innerHTML)
    const card = document.createElement("article");
    card.classList.add("tarjeta");

    // Título con el nombre
    const h3 = document.createElement("h3");
    h3.textContent = persona.nombre;

    // Párrafo para la profesión (con negrita)
    const pProf = document.createElement("p");
    const strongProf = document.createElement("strong");
    strongProf.textContent = persona.profesion;
    pProf.appendChild(strongProf);

    // Línea separadora
    const hr = document.createElement("hr");

    // Datos de contacto
    const pEmail = document.createElement("p");
    pEmail.textContent = `📧 Email: ${persona.email}`;

    const pTel = document.createElement("p");
    pTel.textContent = `📞 Tel: ${persona.telefono}`;

    const pUbi = document.createElement("p");
    pUbi.textContent = `📍 Ubicación: ${persona.ubicacion}`;

    // 5. ENSAMBLAJE: Metemos cada pieza dentro de la 'card'
    card.appendChild(h3);
    card.appendChild(pProf);
    card.appendChild(hr);
    card.appendChild(pEmail);
    card.appendChild(pTel);
    card.appendChild(pUbi);

    // 6. RENDERIZADO: Añadimos la tarjeta completa al contenedor de la página
    contenedor.appendChild(card);

    // 7. LIMPIEZA: Reseteamos el formulario para el siguiente registro
    formulario.reset();
});





