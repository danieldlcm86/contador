//Asignar variables para trabajar con elementos del front (HTML)

var botonAumentar = document.querySelector("#aumentar");
var botonDisminuir = document.querySelector("#disminuir");
var botonReset = document.querySelector("#reset");
var botonRandom = document.querySelector("#botonRandom");

var contador = document.querySelector("#contador");

var valorContador = 0;

/*Un Evento es ese algo que me ayuda a ejecutar una función, con ayuda de una persona que lo dispare.

miElemento.addEventListener("evento a escuchar", listener o que quiero hacer cada que haya un click)
    - miElemento = variable que ya declaré y que toma en cuenta el elemento que dispara (botón)
    - addEventListener
*/

//Función para aumentar
function aumentar(){
    valorContador++;
    contador.innerHTML = valorContador;
}
botonAumentar.addEventListener("click", aumentar);

//Explicacion de la funcion suma: tomo el valor del contador que es cero,y cada que se ejecuta esta funcion aumentare de 1 en 1, ese valor lo quiero ver reflejado en un espacio del HTML que sellama contador. Ese contador, ira tomando el valor respectivo de la variable (variable que se modifica cada que doy clic)

//Función para disminuir
function disminuir(){
    valorContador--;
    contador.innerHTML = valorContador;
}
botonDisminuir.addEventListener("click", disminuir);

//Función para reset
function reset(){
    valorContador = 0;
    contador.innerHTML = valorContador;
}
botonReset.addEventListener("click", reset);


