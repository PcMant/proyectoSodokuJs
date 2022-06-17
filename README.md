---
title: UT7. Juego Sudoku
author: Juan Molina
header-includes: |
lang: es-ES
keywords: UT7. 25/02/2022
---

# UT7. Juego Sudoku


## Introducción
Juego Sudoku hecho en JavaScript.
- tiene almacenado un JSON en el que se encuentra los usuarios, las dificultades y los sudokus.
- Utiliza el localStorage para almacenar la sesión y algunas cosas como el sodoku que se está jugando en cada momento, un orden aleatorio de índices que servirá para determinar que números vienen mostrados de manera inicial y la casilla que selecciones en el momento.
- Tiene cronómetro y es capaz de guardar el mejor tiempo por usuario aun siendo Invitado debido a que se almacena en localStorage.
- El motivo por el cual se emplea tanto el localStorage es debido a que directamente desde el JavaScript del lado cliente no es posible modificar dicho fichero.

Demo: [https://sudoku-js.vercel.app/](https://sudoku-js.vercel.app/)

## Instrucciones de juego

### Objetivo
- Rellenar una cuadrícula de 9x9 dividida en un conjunto con números del 1 al 9.
- No se puede repetir ningún número en una misma fila, columna o subcuadrícula.
- Hay 3 niveles de dificultad:
  - Fácil
  - Normal
  - Difícil

### Como jugar
Nada más cargar la página empieza la partida, si desea otra dificultad puede cambiarla en comenzar una nueva.

Para introducir un número en una casilla solo tiene que seleccionarla haciendo clic sobre ella y teclear cualquier número del 1 al 9.

Si se ha confundido puede borrarlo seleccionando casilla y utilizar la tecla de retroceso o la de suprimir.

Para comprobar puede dar al botón de comprobar, este te mostrará en verde las casillas acertadas y en rojo las fallidas y si has completado todas las casillas en acierto esto hará que finalice la partida, se detenga el cronómetro de la partida y en caso de batir un récord personal se guardará tú último mejor tiempo.
