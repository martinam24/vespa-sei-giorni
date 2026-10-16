/* HOME */


/*GESTIONE DEI MANIFESTI(lezione navigazione DOM B4)*/

function preparaManifesti() { /*La funzione gestisce l'ingrandimento dei manifesti presenti nella Home.*/

    try {

        /*Recupera tutti i manifesti presenti nella pagina.*/

        var manifesti =
            document.querySelectorAll('.cornice-manifesto');


        /*Il ciclo associa l'evento click a ogni manifesto.*/

        for (var i = 0; i < manifesti.length; i++) {

            preparaManifesto(manifesti[i], manifesti);

        }

    } catch (e) {

        alert('preparaManifesti ' + e);

    }

}

/*Lezione B5 associazione dinamica degli eventi*/


function preparaManifesto(manifesto, manifesti) { /*La funzione associa il click al manifesto corrispondente.*/

    manifesto.onclick = function () {

        try {

            /*Se il manifesto è già ingrandito viene riportato alla dimensione iniziale.*/

            if (manifesto.classList.contains('manifesto-ingrandito')) {

                manifesto.classList.remove('manifesto-ingrandito');

            } else {

                /*Riduce eventuali altri manifesti precedentemente ingranditi.*/

                for (var i = 0; i < manifesti.length; i++) {

                    manifesti[i].classList.remove('manifesto-ingrandito');

                }


                /*Ingrandisce il manifesto selezionato.*/

                manifesto.classList.add('manifesto-ingrandito');

            }

        } catch (e) {

            alert('gestoreClickManifesto ' + e);

        }

    };

}


/*Gestione degli eventi dispensa pag 94*/

function gestoreLoad() { /*La funzione inizializza i manifesti e gestisce la comparsa della Home.*/

    try {

        /*Recupera il contenuto principale della Home.*/

        var home =
            document.querySelector('.hero-contenuto');


        /*Aggiunge la classe CSS che rende visibile il contenuto della Home(lezione B10 slide su HTMLElement)*/

        home.classList.add(
            'animazione-attiva'
        );


        /*Prepara il funzionamento dei manifesti.*/

        preparaManifesti();

    } catch (e) {

        alert('gestoreLoad ' + e);

    }

}


/*Avvia la funzione gestoreLoad quando la pagina è stata caricata.*/

window.onload = gestoreLoad;