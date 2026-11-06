// REPASO DE 'this' EN EVENTOS DEL DOM
// Regla general: 'this' depende de CÓMO se llama a la función, no de dónde está escrita

// Escribe un mensaje en el recuadro gris de la página
function escribir(texto) {
    document.getElementById("log").innerHTML = texto;
}

// CASO 1: onclick="caso1(this)" en el HTML
// En el atributo HTML, 'this' es el botón; lo pasamos como parámetro 'boton'
function caso1(boton) {
    escribir("Caso 1 → boton.id = " + boton.id + " (lo recibimos como parámetro)");
    // OJO: dentro de caso1, 'this' NO es el botón (es window), por eso hay que pasarlo
}

window.onload = function () {

    // CASO 2: elemento.onclick = función → 'this' = el elemento
    document.getElementById("b2").onclick = function () {
        escribir("Caso 2 → this.id = " + this.id);
    };

    // CASO 3: addEventListener con function normal → 'this' = el elemento
    document.getElementById("b3").addEventListener("click", function () {
        escribir("Caso 3 → this.id = " + this.id);
    });

    // CASO 4: addEventListener con función FLECHA → 'this' NO es el elemento
    // Las flechas no tienen 'this' propio: usan el de fuera (aquí, window)
    document.getElementById("b4").addEventListener("click", (evento) => {
        // Con flechas, el elemento se saca del objeto event: evento.currentTarget
        escribir("Caso 4 → this es " + this + " | evento.currentTarget.id = " + evento.currentTarget.id);
    });

    // CASO 5: this (o currentTarget) = elemento que TIENE el evento; event.target = elemento CLICADO
    document.getElementById("caja").onclick = function (evento) {
        escribir("Caso 5 → this.id = " + this.id + " | evento.target.id = " + (evento.target.id || "(caja)"));
        // Si clicas en el span: this = caja (tiene el onclick), target = dentro (donde clicaste)
    };

    // CASO 6: 'this' dentro de un método = el objeto que llama al método
    let alumno = {
        nombre: "Javier",
        modulo: "DWEC",
        presentarse: function () {
            // this = alumno, porque se llama como alumno.presentarse()
            return "Soy " + this.nombre + " y estudio " + this.modulo;
        }
    };
    document.getElementById("b6").onclick = function () {
        escribir("Caso 6 → " + alumno.presentarse());
    };
};

// RESUMEN PARA EL EXAMEN:
// onclick="f(this)" en HTML              → pasa el elemento como parámetro
// elem.onclick = function(){ this }      → this = elem
// elem.addEventListener("x", function)   → this = elem
// elem.addEventListener("x", () => {})   → this NO es elem → usa evento.currentTarget
// evento.target                          → el elemento EXACTO donde ocurrió (puede ser un hijo)
// objeto.metodo()                        → this = objeto
// Dentro de un setTimeout(function)      → this se pierde → guárdalo antes: let el = this;
