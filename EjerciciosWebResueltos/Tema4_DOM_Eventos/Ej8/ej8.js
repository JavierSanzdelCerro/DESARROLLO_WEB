// TEMA 4 · EJERCICIO 8 → enunciado completo en ej8.html

// Número aleatorio entre min y max (ambos incluidos)
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Manejador del doble clic: cambia el fondo del body
function cambiarColor() {
    // rgb(rojo, verde, azul): cada canal va de 0 a 255
    let color = "rgb(" + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + ")";
    // document.body.style cambia el CSS en línea del <body>
    document.body.style.backgroundColor = color;
    // (el original usaba document.body.bgColor, un atributo antiguo de HTML; style es lo actual)
}

// dblclick sobre el documento entero = en cualquier parte de la pantalla
document.ondblclick = cambiarColor;
