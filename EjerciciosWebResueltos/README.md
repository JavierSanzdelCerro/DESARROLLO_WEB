# Ejercicios resueltos · Desarrollo Web en Entorno Cliente (DAM2)

Ejercicios corregidos de los temas 1 a 4. Cada archivo empieza con el **enunciado copiado del documento** en un comentario, y el número de ejercicio coincide con el del documento de enunciados.

> El Tema 1 (Arquitectura web) solo tiene teoría, no tiene ejercicios.

## Estructura

```
EjerciciosWebResueltos/
├── Tema2_SintaxisJavaScript/      ej1.html … ej21.html
├── Tema3_ObjetosPredefinidos/
│   ├── ej1.html … ej4.html        Arrays
│   ├── Ej5/                       Calendario (prioritario) + variantes de examen
│   ├── ej6.html … ej10.html       Cadenas
│   ├── ej11.html … ej15.html      Fechas (objeto Date)
│   └── Ej16/                      Horario (prioritario) + variantes de examen
└── Tema4_DOM_Eventos/
    ├── Ej1/ … Ej9/                ejN.html + ejN.js (JS en archivo separado, como pide el enunciado)
    ├── Repaso_this/               Página de práctica: qué vale `this` en cada caso
    └── README.md                  Chuleta de DOM y eventos
```

## Variantes de examen

| Carpeta | Archivo | Qué cambia |
|---|---|---|
| Tema3/Ej5 | `ej5.html` | Solución base (año 2026, festivos en rojo) |
| | `ej5_AnoPedido.html` | Pide también el año; domingos en rojo |
| | `ej5_EmpiezaDomingo.html` | La semana empieza en domingo |
| | `ej5_MarcandoHoy.html` | Marca el día de hoy en azul |
| | `ej5_Titulo.html` | Título con mes y año + marca hoy |
| Tema3/Ej16 | `ej16.html` | Solución base (15:45, clases de 50 min) |
| | `ej16_ConFechas.html` | Cabecera con la fecha real de cada día de esta semana |
| | `ej16_MarcandoHoy.html` | Resalta la columna del día de hoy |
| | `ej16_ClaseActual.html` | Resalta la clase que toca ahora mismo |
| | `ej16_HoraPedida.html` | El usuario elige hora de inicio y duraciones |

## Correcciones sobre las soluciones originales

Las líneas cambiadas están marcadas en el código con `// CORREGIDO:`.

- **Tema 2**: ej3 (estructura de la tabla), ej5 (mensaje al revés), ej9 (solo reconocía C3PO), ej10 (descuentos mal calculados), ej11 (99 daba 3 cifras), ej18 (no incluía el último impar), ej20 (números como texto y `document.write` borraba la página), ej21 (faltaban los `alert`).
- **Tema 3**: ej1 (no validaba números), ej2 (no decía si el DNI era válido), ej6 (fallaba con puntos en el usuario), ej7 (el ejemplo con tildes no salía palíndromo), ej10 (letras se daban por válidas), ej12 (faltaban ceros), ej15 (edad mal cerca del cumpleaños).
- **Tema 4**: ej2 (el botón no hacía nada), ej3 (los botones eran cajas de texto), ej4 (el doble clic nunca llegaba a eliminar), ej7 (rango 0001-9999 y contador).
