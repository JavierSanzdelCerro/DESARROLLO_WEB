// TEMA 4 · EJERCICIO 7 → enunciado completo en ej7.html

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Devuelve la letra que corresponde a un número de DNI
function letraDNI(numeroDni) {
    return letras[numeroDni % 23];
}

// Rellena con ceros a la izquierda hasta 4 cifras: 7 → "0007", 45 → "0045"
function cuatroCifras(n) {
    if (n < 10) {
        return "000" + n;
    } else if (n < 100) {
        return "00" + n;
    } else if (n < 1000) {
        return "0" + n;
    }
    return "" + n;
}

// Manejador del teclado: recibe el objeto event con la tecla pulsada
function calcularDNI(evento) {
    // keyCode = código numérico de la tecla. Las letras van de la A = 65 a la Z = 90
    let codigo = evento.keyCode;

    // CORREGIDO: si no es una letra (Shift, Ctrl, números...) salimos SIN tocar el resultado
    // Antes ponía "Eso no es una letra" y al soltar Shift tras Shift+A se borraba la lista
    if (codigo < 65 || codigo > 90) {
        return;
    }

    // Truco para pasar el código a letra: A está en la posición 0 del abecedario, y 65 - 65 = 0
    let letra = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(codigo - 65);

    let lista = "";
    let contador = 0;
    // CORREGIDO: el enunciado dice del 0001 al 9999 (antes empezaba en 0)
    for (let i = 1; i <= 9999; i++) {
        if (letraDNI(i) == letra) {
            lista += cuatroCifras(i) + letra + " ; ";
            contador++;
        }
    }

    // CORREGIDO: el enunciado pide también CUÁNTOS hay
    // La I, la O y la U no se usan en el DNI → con ellas contador se queda en 0
    document.getElementById("resultado").innerHTML =
        "Hay " + contador + " DNIs con la letra " + letra + ":<br>" + lista;
}

// keyup = al SOLTAR la tecla (keydown = al pulsarla)
document.onkeyup = calcularDNI;
