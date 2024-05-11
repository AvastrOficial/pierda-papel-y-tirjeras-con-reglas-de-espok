# pierda-papel-y-tirjeras-con-reglas-de-espok

## Inicialización de variables:
Se define una variable llamada marcadorGlobal que almacena el marcador global del juego. Inicialmente, está establecida en [0, 0], lo que indica que ambos jugadores (jugador y computadora) tienen 0 puntos al principio del juego.

# total de items :
![image](https://github.com/AvastrOficial/pierda-papel-y-tirjeras-con-reglas-de-espok/assets/91764815/74353b93-39b7-402b-a14b-7cd1a565c99c)

## Función ganaJugador:
Esta función toma dos argumentos: tiro (la elección del jugador) y tiroComputadora (la elección de la computadora). Evalúa si el jugador gana comparando las elecciones. Si el jugador gana, devuelve true; de lo contrario, devuelve false.

## Función actualizarMarcador:
Esta función toma cuatro parámetros: gano (booleano que indica si el jugador ganó), empate (booleano que indica si hay un empate), jugador (puntos del jugador) y computadora (puntos de la computadora). Actualiza el marcador dependiendo del resultado del juego. Si hay un empate, los puntos no cambian. Si el jugador gana, se incrementa su puntaje. Si la computadora gana, se incrementa su puntaje.

## Evento click en .selector-tiro:
Este evento se activa cuando el usuario hace clic en uno de los elementos con la clase .selector-tiro. Estos elementos representan las opciones de juego: piedra, papel o tijeras. Cuando el jugador elige una opción, se ejecuta el código dentro de la función de callback asociada al evento click. Se obtiene la elección del jugador y se actualiza visualmente en la interfaz del usuario. La computadora elige aleatoriamente una opción (piedra, papel o tijeras) y se muestra en la interfaz. Se determina el resultado del juego (ganar, perder o empatar) comparando las selecciones del jugador y la computadora. Se actualiza el marcador del juego según el resultado. Los marcadores actualizados se muestran en la interfaz del usuario.

![image](https://github.com/AvastrOficial/pierda-papel-y-tirjeras-con-reglas-de-espok/assets/91764815/9364b20f-9f2a-4fd9-9358-37f2258d2e32)

## En resumen : 
Este código controla la lógica de un juego simple de piedra, papel o tijeras entre un jugador y la computadora, y actualiza el marcador según el resultado de cada ronda.

![image](https://github.com/AvastrOficial/pierda-papel-y-tirjeras-con-reglas-de-espok/assets/91764815/f1428fae-c59e-4203-92d4-6329a2ede9d4)
<br></br>
link juego en linea : https://appbsz.crearforo.net/h101-juego-piedra-papel-y-tijera	
