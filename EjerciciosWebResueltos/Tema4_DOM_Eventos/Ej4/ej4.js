// TEMA 4 · EJERCICIO 4 → enunciado completo en ej4.html

// CORREGIDO: antes había UN temporizador para los 3 párrafos, y un clic en uno cancelaba el ocultar de otro
// Ahora hay uno por párrafo: temporizadores[1] es el de miP1, temporizadores[2] el de miP2...
let temporizadores = [];

// Saca el número del id: "miP2" → desde la posición 3 → "2"
function numeroParrafo(parrafo) {
    return parseInt(parrafo.id.substring(3));
}

window.onload = function () {
    // Asignamos los mismos manejadores a los 3 párrafos con un bucle
    for (let i = 1; i <= 3; i++) {
        let p = document.getElementById("miP" + i);
        p.onclick = ocultar;
        p.ondblclick = eliminar;
    }
    document.getElementById("reaparecer").onclick = volverAMostrar;
};

// CLIC → ocultar el párrafo
function ocultar() {
    // 'this' = el <p> sobre el que se ha hecho clic (porque se asignó con p.onclick = ocultar)
    // Lo guardamos en una variable porque dentro del setTimeout 'this' ya NO sería el párrafo
    let parrafo = this;
    let n = numeroParrafo(parrafo);

    // CORREGIDO: un doble clic dispara ANTES dos clics; si ocultamos al instante, el dblclick ya no llega al <p>
    // Por eso esperamos 250 ms: si en ese tiempo llega el doble clic, se cancela el ocultar
    clearTimeout(temporizadores[n]);
    temporizadores[n] = setTimeout(function () {
        // display = "none" lo oculta pero SIGUE existiendo en el DOM
        parrafo.style.display = "none";
    }, 250);
}

// DOBLE CLIC → eliminar el párrafo del DOM
function eliminar() {
    // Cancelamos el ocultar pendiente de los clics anteriores (solo el de ESTE párrafo)
    clearTimeout(temporizadores[numeroParrafo(this)]);
    // 'this' = el <p> del doble clic; se le pide al padre que lo quite
    this.parentNode.removeChild(this);
}

// BOTÓN → vuelve a mostrar los ocultos (los eliminados ya no existen)
function volverAMostrar() {
    for (let i = 1; i <= 3; i++) {
        let p = document.getElementById("miP" + i);
        // Si fue eliminado, getElementById devuelve null → hay que comprobarlo
        if (p != null) {
            // display vacío = vuelve a su forma normal (visible)
            p.style.display = "";
        }
    }
}

// OTRA FORMA (sin temporizador): en vez de hidden usar p.style.opacity = 0;
// el párrafo sigue ocupando su sitio, así que se le puede hacer doble clic aunque sea invisible
