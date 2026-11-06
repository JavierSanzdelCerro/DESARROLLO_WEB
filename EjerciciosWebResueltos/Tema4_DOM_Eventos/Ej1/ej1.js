// TEMA 4 · EJERCICIO 1 → enunciado completo en ej1.html

// window.onload se ejecuta cuando la página ha cargado entera
// Si no esperamos, getElementById devolvería null porque el <body> aún no existe
window.onload = function () {
    // Asignamos la función SIN paréntesis: no la ejecutamos, la "enganchamos" al clic
    document.getElementById("nuevo").onclick = insertar;
    document.getElementById("borrar").onclick = borrar;
};

// Añade un <li> con un número aleatorio a la lista
function insertar() {
    // 'this' aquí es el botón pulsado, porque la función se asignó con boton.onclick = insertar
    console.log("Has pulsado: " + this.value);

    // 1º creamos el elemento <li> (todavía no está en la página)
    let nuevoLi = document.createElement("li");
    // 2º creamos un nodo de texto con el número aleatorio (de 1 a 100)
    let texto = document.createTextNode(Math.floor(Math.random() * 100) + 1);
    // 3º metemos el texto dentro del <li>
    nuevoLi.appendChild(texto);
    // 4º metemos el <li> dentro del <ul> → ahora SÍ aparece en la página
    document.getElementById("miLista").appendChild(nuevoLi);

    // OTRA FORMA más corta (pero menos "DOM"): lista.innerHTML += "<li>" + numero + "</li>";
}

// Elimina el último <li> de la lista
function borrar() {
    let lista = document.getElementById("miLista");
    // lastElementChild = el último hijo que sea una etiqueta (ignora espacios/saltos de línea)
    let ultimo = lista.lastElementChild;

    // Si la lista está vacía, ultimo es null y no hacemos nada
    if (ultimo) {
        // Para borrar un nodo se le pide a su PADRE que lo quite
        lista.removeChild(ultimo);
        // OTRA FORMA: ultimo.remove();
    }
}
