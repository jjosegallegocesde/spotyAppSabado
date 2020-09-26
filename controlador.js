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




}




/*const url = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?country=US";


const parametros = {
    method: "GET",
    headers: { "Authorization": token },
}



fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => depurarDatos(datos));



function depurarDatos(datos) {
    console.log(datos); //objeto (tracks)
    console.log(datos.tracks); //arreglo (10 posiciones)
    console.log(datos.tracks[0]); //primer objeto de 10 posibles
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);


}*/