// TEMA 4 · EJERCICIO 2 → enunciado completo en ej2.html

// Al cargar la página: creamos la tabla y enganchamos el botón
window.onload = function () {
    crearTabla();
    // CORREGIDO: antes se pintaban al crear la tabla; el enunciado pide que lo haga el BOTÓN
    document.getElementById("botonCasiPrimos").onclick = marcarCasiPrimos;
};

// Devuelve true si n tiene EXACTAMENTE un divisor entre 2 y n-1
function esCasiPrimo(n) {
    let divisores = 0;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            divisores++;
            // En cuanto haya 2 divisores ya no es casi primo: salimos para no perder tiempo
            if (divisores > 1) {
                return false;
            }
        }
    }
    return divisores == 1;
}

// Crea la tabla 100x100 con createElement y la añade al body
function crearTabla() {
    let tabla = document.createElement("table");
    let numero = 1;

    for (let i = 0; i < 100; i++) {
        // Una fila <tr> por cada vuelta del bucle exterior
        let fila = document.createElement("tr");
        for (let j = 0; j < 100; j++) {
            // Una celda <td> con su número
            let celda = document.createElement("td");
            celda.appendChild(document.createTextNode(numero));
            fila.appendChild(celda);
            numero++;
        }
        tabla.appendChild(fila);
    }
    // Hasta esta línea la tabla solo existía en memoria; ahora la metemos en la página
    document.body.appendChild(tabla);
}

// Recorre todas las celdas y pinta de amarillo las casi primas
function marcarCasiPrimos() {
    // getElementsByTagName devuelve TODAS las etiquetas <td> de la página
    let celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        // innerHTML = el contenido de la celda como texto ("4"); parseInt lo pasa a número
        let valor = parseInt(celdas[i].innerHTML);
        if (esCasiPrimo(valor)) {
            // .style.propiedad cambia el CSS del elemento (background-color → backgroundColor)
            celdas[i].style.backgroundColor = "yellow";
        }
    }
}
