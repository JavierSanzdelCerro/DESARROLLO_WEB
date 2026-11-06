// TEMA 4 · EJERCICIO 4 → enunciado completo en ej4.html

// Guarda el temporizador del clic pendiente (para poder cancelarlo si llega un doble clic)
let temporizador = null;

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

    // CORREGIDO: un doble clic dispara ANTES dos clics; si ocultamos al instante, el dblclick ya no llega al <p>
    // Por eso esperamos 250 ms: si en ese tiempo llega el doble clic, se cancela el ocultar
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
        parrafo.hidden = true; // hidden = true lo oculta pero SIGUE existiendo en el DOM
    }, 250);
}

// DOBLE CLIC → eliminar el párrafo del DOM
function eliminar() {
    // Cancelamos el ocultar pendiente de los clics anteriores
    clearTimeout(temporizador);
    // 'this' = el <p> del doble clic; se le pide al padre que lo quite
    this.parentNode.removeChild(this);
    // OTRA FORMA: this.remove();
}

// BOTÓN → vuelve a mostrar los ocultos (los eliminados ya no existen)
function volverAMostrar() {
    for (let i = 1; i <= 3; i++) {
        let p = document.getElementById("miP" + i);
        // Si fue eliminado, getElementById devuelve null → hay que comprobarlo
        if (p != null) {
            p.hidden = false;
        }
    }
}

// OTRA FORMA (sin temporizador): en vez de hidden usar p.style.opacity = 0;
// el párrafo sigue ocupando su sitio, así que se le puede hacer doble clic aunque sea invisible
