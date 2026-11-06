// TEMA 4 · EJERCICIO 9 → enunciado completo en ej9.html
// Drag & Drop en 3 pasos: dragstart (coger) → dragover (pasar por encima) → drop (soltar)

// PASO 2: se dispara continuamente mientras arrastramos algo POR ENCIMA de la papelera
function allowDrop(ev) {
    // Por defecto el navegador NO deja soltar cosas; preventDefault() quita esa restricción
    ev.preventDefault();
}

// PASO 1: se dispara al EMPEZAR a arrastrar la bola
function drag(ev) {
    // dataTransfer es una "mochila" que viaja con el arrastre: guardamos el id del elemento
    // ev.target = el elemento que estamos arrastrando (la bola)
    ev.dataTransfer.setData("informacion", ev.target.id);
}

// PASO 3: se dispara al SOLTAR sobre la papelera
function drop(ev) {
    // Evita que el navegador intente abrir la imagen soltada como si fuera un enlace
    ev.preventDefault();
    // Recuperamos de la "mochila" el id que guardamos en drag()
    let data = ev.dataTransfer.getData("informacion");

    // Solo reaccionamos si lo que se ha soltado es la bola
    if (data == "bola") {
        // Cambiando el atributo src cambiamos la imagen que se ve
        document.getElementById("papelera").src = "papeleraLLena.jpg";
        // La bola desaparece de la página (ya está "dentro" de la papelera)
        document.getElementById("bola").remove();
    }
}
