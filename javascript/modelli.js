/*MODELLI - TENDINE E ANIMAZIONI*/


/*GESTIONE DELLE TENDINE(lezioni B1,B4,B5,B10 e pag 94 dispensa)*/

function preparaTendine() { /*La funzione gestisce l'apertura e la chiusura delle tendine dei modelli.*/

    try {

        /*Recupera tutte le intestazioni cliccabili e tutti i modelli.*/

        var intestazioni =
            document.querySelectorAll('.modello-intestazione');

        var modelli =
            document.querySelectorAll('.modello');


        /*Il ciclo associa l'evento click a ogni intestazione.*/

        for (var i = 0; i < intestazioni.length; i++) {

            preparaIntestazione(intestazioni[i], modelli[i], modelli);

        }

    } catch (e) {

        alert('preparaTendine ' + e);

    }

}


function preparaIntestazione(intestazione, modello, modelli) { /*La funzione associa il click alla tendina corrispondente.*/

    intestazione.onclick = function () {

        try {

            /*Chiude gli altri modelli eventualmente aperti.*/

            for (var i = 0; i < modelli.length; i++) {

                if (modelli[i] != modello) {

                    modelli[i].classList.remove('aperto');

                }

            }


            /*Se il modello è aperto lo chiude, altrimenti lo apre.*/

            if (modello.classList.contains('aperto')) {

                modello.classList.remove('aperto');

            } else {

                modello.classList.add('aperto');

            }

        } catch (e) {

            alert('gestoreClickModello ' + e);

        }

    };

}


/*CARICAMENTO DELLA PAGINA*/

function gestoreLoad() { /*La funzione inizializza le tendine e gestisce la comparsa degli elementi della pagina.*/

    try {

        /*Prepara il funzionamento delle tendine.*/

        preparaTendine();


        /*Recupera gli elementi della pagina che devono comparire.*/

        var titolo =
            document.querySelector('.modelli-titolo');

        var invito =
            document.querySelector('.modelli-invito');

        var modelli =
            document.querySelectorAll('.modello');


        /*Aggiunge le classi CSS che rendono visibili gli elementi.*/

        titolo.classList.add(
            'modelli-titolo-visibile'
        );

        invito.classList.add(
            'invito-visibile'
        );


        /*Il ciclo rende visibili tutti i modelli presenti nella pagina.*/

        for (var i = 0; i < modelli.length; i++) {

            modelli[i].classList.add(
                'modello-visibile'
            );

        }

    } catch (e) {

        alert('gestoreLoad ' + e);

    }

}


/*Avvia la funzione gestoreLoad quando la pagina è stata caricata.*/

window.onload = gestoreLoad;