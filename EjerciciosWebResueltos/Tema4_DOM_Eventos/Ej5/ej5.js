// TEMA 4 · EJERCICIO 5 → enunciado completo en ej5.html

// El navegador pasa AUTOMÁTICAMENTE el objeto event como primer parámetro del manejador
function mostrarPosicion(evento) {
    // clientX / clientY = posición respecto a la ventana del NAVEGADOR
    // (screenX / screenY sería respecto a la PANTALLA entera del ordenador)
    document.getElementById("p1").innerHTML =
        "Posición X: " + evento.clientX + " | Posición Y: " + evento.clientY;
}

// mousemove se dispara cada vez que el ratón se mueve sobre el documento
// Se asigna a 'document', que ya existe aunque el <body> no haya cargado → no hace falta window.onload
document.onmousemove = mostrarPosicion;

// OTRA FORMA (más moderna, permite varios manejadores para el mismo evento):
// document.addEventListener("mousemove", mostrarPosicion);
