// TEMA 4 · EJERCICIO 7 → enunciado completo en ej7.html

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Devuelve la letra que corresponde a un número de DNI
function letraDNI(numeroDni) {
    return letras[numeroDni % 23];
}

// Manejador del teclado: recibe el objeto event con la tecla pulsada
function calcularDNI(evento) {
    // evento.key = la tecla pulsada como texto ("a", "Enter", "Shift"...)
    // (el código original usaba evento.keyCode, que está obsoleto)
    let letra = evento.key.toUpperCase();

    // Si no es una de las letras del DNI (p. ej. "Shift" o "1"), avisamos y salimos
    if (!letras.includes(letra)) {
        document.getElementById("resultado").innerHTML = "'" + evento.key + "' no es una letra de DNI";
        return;
    }

    let lista = "";
    let contador = 0;
    // CORREGIDO: el enunciado dice del 0001 al 9999 (antes empezaba en 0)
    for (let i = 1; i <= 9999; i++) {
        if (letraDNI(i) == letra) {
            // padStart(4, "0") rellena con ceros a la izquierda: 7 → "0007"
            lista += String(i).padStart(4, "0") + letra + " ; ";
            contador++;
        }
    }

    // CORREGIDO: el enunciado pide también CUÁNTOS hay
    document.getElementById("resultado").innerHTML =
        "Hay " + contador + " DNIs con la letra " + letra + ":<br>" + lista;
}

// keyup = al SOLTAR la tecla (keydown = al pulsarla)
document.onkeyup = calcularDNI;
