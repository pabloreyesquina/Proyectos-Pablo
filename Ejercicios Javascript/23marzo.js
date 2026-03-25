/* Crea un sistema de preferencias de usuario que persista en localStorage. Requisitos

Clase ConfiguracionUsuario.

Propiedades: tema (claro/oscuro), idioma, notificaciones (true/false).

Métodos:

∑cargar(): carga desde localStorage o usa valores por defecto.

guardar(): guarda en localStorage.

cambiarTema(tema).

cambiarIdioma(idioma).

toggleNotificaciones().

reset(): vuelve a valores por defecto.

obtenerConfig(): devuelve objeto con configuración actual. */


// Valores por defecto:

const DEFAULT_CONFIG = {
    tema: "claro",
    idioma: "es",
    notificaciones: true
};

class ConfiguracionUsuario {
    constructor() {
        this.cargar();

    }
    cargar() {
        const guardado = localStorage.getItem("config");
        if (guardado) {
            try {
                this.config = JSON.parse(guardado);
            }
            catch (error) {
                console.error("Error al cargar la configuración, restaurando valores por defecto", error);
                this.reset();
            }
        }
        else
            this.reset();


    }
    guardar() {
        localStorage.setItem("config", JSON.stringify(this.config));

    }

    cambiarTema(tema) {
        this.config.tema = tema;
        this.guardar();
    }
    cambiarIdioma(idioma) {
        this.config.idioma = idioma;
        this.guardar();
    }
    toggleNotificaciones() {
        this.config.notificaciones = !this.config.notificaciones;
        this.guardar();
    }
    reset() {
        this.config = { ...DEFAULT_CONFIG };
        this.guardar();
    }
    obtenerConfig() {
        return this.config;
    }

}