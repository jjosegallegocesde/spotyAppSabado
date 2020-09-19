const url = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?country=US";
const token = "Bearer BQCTmfpH-0ZjcutSvhLRfhEyedcMLErgEv9NL0QnattqhuhiDP853W8-OkgqA9kmub8dSLReFfn-VALBt27sFs3h5-iMEhEu51yfU4_JW4qTsZhMmpkMpjxOLEgYRTlCD0F5asw-pWzRWBhCPfY";

const parametros = {
    method: "GET",
    headers: { "Authorization": token },
}

fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => depurarDatos(datos));



function depurarDatos(datos) {
    /*console.log(datos); //objeto (tracks)
    console.log(datos.tracks); //arreglo (10 posiciones)
    console.log(datos.tracks[0]); //primer objeto de 10 posibles*/
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);


}