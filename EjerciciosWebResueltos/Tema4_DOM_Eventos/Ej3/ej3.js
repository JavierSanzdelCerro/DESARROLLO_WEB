// TEMA 4 · EJERCICIO 3 → enunciado completo en ej3.html

window.onload = function () {
    crearCheckbox();
    // Los dos botones usan la MISMA función; 'this' nos dirá cuál se ha pulsado
    document.getElementById("marcar").onclick = cambiarTodos;
    document.getElementById("desmarcar").onclick = cambiarTodos;
};

// Crea 100 checkbox, cada uno con su número aleatorio al lado
function crearCheckbox() {
    let contenedor = document.getElementById("contenedor");

    for (let i = 0; i < 100; i++) {
        let numero = Math.floor(Math.random() * 1000);

        // Creamos <input> y le cambiamos sus propiedades desde JS
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = numero;
        checkbox.id = "check" + i;

        // <label for="checkN"> → al pulsar el número también se marca el checkbox
        let label = document.createElement("label");
        label.setAttribute("for", "check" + i);
        label.appendChild(document.createTextNode(numero));

        contenedor.appendChild(checkbox);
        contenedor.appendChild(label);
        // CORREGIDO: antes se hacía body.innerHTML += "<br>", que vuelve a crear TODO el body en cada vuelta
        contenedor.appendChild(document.createElement("br"));
    }
}

// Marca o desmarca todos según el botón pulsado
function cambiarTodos() {
    // 'this' es el botón que disparó el evento → su id nos dice qué hacer
    let marcar = (this.id === "marcar");

    // getElementsByTagName("input") trae TODOS los <input>, también los 2 botones
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        // Por eso filtramos por tipo: solo tocamos los checkbox
        if (inputs[i].type === "checkbox") {
            // .checked = true marca, false desmarca
            inputs[i].checked = marcar;
        }
    }
}
