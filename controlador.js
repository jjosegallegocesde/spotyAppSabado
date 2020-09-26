const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=f5d8c0020ca64dc7a2fdbf1d858869c0";
const llave3 = "client_secret=53ce8d86a24946628aa808f91529f858";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3
}

const urlPOST = "https://accounts.spotify.com/api/token";

fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => generarToken(datos));


function generarToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token;

    const urlGET = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?country=US";

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token },
    }

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarDatos(datos));

}

function depurarDatos(datos) {

    //En 3 variables JS almacenamos los recursos que llegan desde el API
    let audio1 = (datos.tracks[0].preview_url); //audio
    let titulo1 = (datos.tracks[0].name); //titulo
    let imagen1 = (datos.tracks[0].album.images[0].url); //imagen

    //Referenciamos etiquetas HTML usando el DOM
    let audio1DOM = document.getElementById("audio1");
    let titulo1DOM = document.getElementById("titulo1");
    let imagen1DOM = document.getElementById("imagen1");

    //Creo la referencia y modifico el contenido de las etiquetas
    audio1DOM.src = audio1;
    titulo1DOM.textContent = titulo1;
    imagen1DOM.src = imagen1;



}