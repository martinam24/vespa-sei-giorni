/*Dalla dispensa pag. 127 (Galleria fotografica)*/

function gestoreClickAvanti() { /*La funzione scorre in avanti di due foto la galleria.*/

    try {

        if (!automatico) {

            cambiaFoto(+2);

        }

    } catch (e) {

        alert('gestoreClickAvanti ' + e);

    }

}


function gestoreClickIndietro() { /*La funzione rimanda indietro di due foto la galleria.*/

    try {

        if (!automatico) {

            cambiaFoto(-2);

        }

    } catch (e) {

        alert('gestoreClickIndietro ' + e);

    }

}


function cambiaFoto(x) { /*La funzione ha un parametro che viene mandato avanti o indietro in base alla funzione che la richiama.*/

    indiceFoto += x;

    if (indiceFoto == numeroFoto) {

        indiceFoto = 0;

    }

    if (indiceFoto < 0) {

        indiceFoto = numeroFoto - 2;

    }

    nodoFotoSinistra.setAttribute('src', galleria[indiceFoto]);

    nodoFotoDestra.setAttribute('src', galleria[indiceFoto + 1]);

    nodoNumeroFoto.textContent =
        (indiceFoto + 1) + ' — ' + (indiceFoto + 2) + ' / ' + numeroFoto;

}


function gestoreClickStartStop() { /*La funzione gestisce l'evento generato con il click sul pulsante "Scorri in automatico" oppure "Ferma scorrimento".*/

    try {

        if (automatico) {

            nodoStartStop.textContent = 'SCORRI IN AUTOMATICO';

            automatico = false;

        } else {

            nodoStartStop.textContent = 'FERMA SCORRIMENTO';

            automatico = true;

            cambiaFotoInAutomatico();

        }

    } catch (e) {

        alert('gestoreClickStartStop ' + e);

    }

}


function cambiaFotoInAutomatico() { /*La funzione cambia in automatico le foto facendole scorrere in avanti di due posizioni in un tempo determinato dalla costante RITARDO.*/

    try { /*La regolarità dell'evento è garantita dalla funzione setTimeout.*/

        if (automatico) {

            cambiaFoto(+2);

            setTimeout(cambiaFotoInAutomatico, RITARDO);

        }

    } catch (e) {

        alert('cambiaFotoInAutomatico ' + e);

    }

}


/*Contenuti*/

var galleria = [

    'img/restauro01.jpeg',

    'img/restauro02.jpeg',

    'img/restauro03.jpeg',

    'img/restauro04.jpeg',

    'img/restauro05.jpeg',

    'img/restauro06.jpeg',

    'img/restauro07.jpeg',

    'img/restauro08.jpeg'

];


const RITARDO = 2000;

var indiceFoto;

var numeroFoto;

var automatico;

var nodoAvanti;

var nodoIndietro;

var nodoStartStop;

var nodoFotoSinistra;

var nodoFotoDestra;

var nodoNumeroFoto;


/*Lezioni sul DOM e sulla selezione degli elementi (dispensa pag.94, lezione B4,B10)*/

function gestoreLoad() { /*La funzione inizializza le variabili, associa gli elementi HTML con quelli contenuti in JS e gestisce la comparsa degli elementi della pagina.*/

    try { /*La funzione viene richiamata al caricamento della pagina.*/

        nodoAvanti = document.getElementById('foto-successiva');

        nodoIndietro = document.getElementById('foto-precedente');

        nodoStartStop = document.getElementById('automatico-gallery');

        nodoFotoSinistra = document.getElementById('foto-restauro-sinistra');

        nodoFotoDestra = document.getElementById('foto-restauro-destra');

        nodoNumeroFoto = document.getElementById('numero-foto');


        nodoAvanti.onclick = gestoreClickAvanti;

        nodoIndietro.onclick = gestoreClickIndietro;

        nodoStartStop.onclick = gestoreClickStartStop;


        nodoStartStop.textContent = 'SCORRI IN AUTOMATICO';

        numeroFoto = galleria.length;

        automatico = false;

        indiceFoto = 0;

        cambiaFoto(0);


        /*Recupera gli elementi della pagina che devono comparire.*/

        var apertura = document.querySelector('.about-apertura');

        var fotoAbout = document.querySelector('.about-foto');

        var testoAbout = document.querySelector('.about-testo');

        var restauro = document.querySelector('.about-restauro');

        var gallery = document.querySelector('.gallery-restauro');

        var progetto = document.querySelector('.about-progetto');


        /*Aggiunge la classe CSS che rende visibili gli elementi.*/

        apertura.classList.add('about-visibile');

        fotoAbout.classList.add('about-visibile');

        testoAbout.classList.add('about-visibile');

        restauro.classList.add('about-visibile');

        gallery.classList.add('about-visibile');

        progetto.classList.add('about-visibile');

    } catch (e) {

        alert('gestoreLoad ' + e);

    }

}


window.onload = gestoreLoad;