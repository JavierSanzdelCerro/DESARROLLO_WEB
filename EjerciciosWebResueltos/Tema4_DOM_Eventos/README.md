# Chuleta Tema 4 · DOM y eventos

## Buscar elementos
| Método | Devuelve |
|---|---|
| `document.getElementById("id")` | Un elemento (o `null`) |
| `document.getElementsByTagName("td")` | Lista de elementos por etiqueta (se recorre con `for`) |
| `document.getElementsByName("x")` | Lista de elementos por atributo `name` |
| `document.getElementsByClassName("x")` | Lista de elementos por clase |

## Crear, añadir y quitar
| Código | Qué hace | Ejercicio |
|---|---|---|
| `document.createElement("li")` | Crea una etiqueta (aún no se ve) | Ej1, Ej2, Ej3 |
| `document.createTextNode("hola")` | Crea un texto | Ej1, Ej2 |
| `padre.appendChild(hijo)` | Mete el hijo al final del padre (ahora sí se ve) | Ej1, Ej2, Ej3 |
| `padre.removeChild(hijo)` | Elimina del DOM (truco: `hijo.parentNode.removeChild(hijo)`) | Ej1, Ej4, Ej9 |
| `elem.innerHTML = "<b>x</b>"` | Cambia el contenido (interpreta HTML) | Ej5, Ej7 |
| `elem.style.backgroundColor = "red"` | Cambia el CSS | Ej2, Ej8 |
| `elem.style.display = "none"` / `""` | Oculta sin eliminar / vuelve a mostrar | Ej4 |
| `img.src = "otra.jpg"` | Cambia un atributo | Ej9 |
| `elem.setAttribute("for", "x")` | Cambia cualquier atributo por su nombre | Ej3 |

## Eventos usados
| Evento | Cuándo | Ejercicio |
|---|---|---|
| `onload` | Página cargada | Todos los que tienen el script en `<head>` |
| `onclick` / `ondblclick` | Clic / doble clic | Ej1-4, Ej6, Ej8 |
| `onmousemove` | Mover el ratón | Ej5 |
| `onkeyup` | Soltar una tecla | Ej7 |
| `ondragstart` / `ondragover` / `ondrop` | Arrastrar y soltar | Ej9 |

## Tres formas de asignar un evento
```js
<button onclick="f(this)">          // 1. En el HTML
boton.onclick = f;                   // 2. Propiedad (solo 1 manejador por evento)
boton.addEventListener("click", f);  // 3. Moderna (admite varios manejadores)
```

## `this` en eventos (practícalo en `Repaso_this/`)
- `elem.onclick = function(){}` o `addEventListener` con `function` → `this` es **el elemento**.
- Con función flecha `() => {}` → `this` **no** es el elemento; usa `evento.target`.
- `evento.target` es el elemento exacto donde se hizo clic (puede ser un hijo).
- Dentro de `setTimeout(function(){})` se pierde `this` → guárdalo antes: `let el = this;` (Ej4).
