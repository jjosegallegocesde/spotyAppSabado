//1. Referenciar etiquetas HTML en variables de JS
let titulo = document.getElementById("titulo");
let reproductoMP3 = document.getElementById("audio");
let boton1 = document.getElementById("pista1");
let boton2 = document.getElementById("pista2");

//2. Para modificar el texto de una etiqueta desde JS usamos la propiedad textcontent
titulo.textContent = 'Coldplay';

//3. Escuhar eventos 
boton1.addEventListener('click', activarPista1);
boton2.addEventListener('click', activarPista2);


//4. Defino que hacen las funciones del punto 3 
function activarPista1() {
    reproductoMP3.src = 'audio/audio1.mp3';
}

function activarPista2() {
    reproductoMP3.src = 'audio/audio2.mp3';
}