// TEMA 4 · EJERCICIO 6 → enunciado completo en ej6.html

// setInterval devuelve un número (id del intervalo) que luego necesita clearInterval
// -1 significa "no hay ningún intervalo activo"
let estado = -1;

function comenzar() {
    // Si ya hay uno en marcha no creamos otro (si no, se acumularían y no podríamos pararlos todos)
    if (estado != -1) {
        console.log("Ya estamos saludando");
    } else {
        // setInterval(función, milisegundos) → repite la función cada 5000 ms = 5 s
        // Se pasa una FUNCIÓN, no un texto como "alert('Hola')" (eso funciona pero es mala práctica)
        estado = setInterval(function () {
            alert("Hola");
        }, 5000);
    }
}

function parar() {
    if (estado != -1) {
        // clearInterval detiene el intervalo usando su id
        clearInterval(estado);
        estado = -1;
    } else {
        console.log("No hay saludo que parar");
    }
}

// DIFERENCIA CLAVE: setInterval repite cada X ms; setTimeout lo ejecuta UNA sola vez tras X ms
