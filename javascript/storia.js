
/*Dalle lezioni sul DOM e sulla selezione degli elementi(dispensa pag.94, lezione B4,B10)*/

function gestoreLoad() { /*La funzione recupera gli elementi HTML e gestisce la loro comparsa al caricamento della pagina.*/

    try {

        /*Recupera la parte iniziale della pagina Storia.*/

        var aperturaStoria =
            document.querySelector('.storia-apertura');


        /*Aggiunge la classe CSS che rende visibile la parte iniziale.*/

        aperturaStoria.classList.add(
            'storia-apertura-visibile'
        );


        /*Recupera tutti i capitoli presenti nella pagina.*/

        var capitoli =
            document.querySelectorAll('.capitolo-storia');


        /*Il ciclo scorre tutti i capitoli e aggiunge la classe per renderli visibili.*/

        for (var i = 0; i < capitoli.length; i++) {

            capitoli[i].classList.add(
                'capitolo-visibile'
            );

        }


        /*Recupera la sezione finale dedicata alla nascita della Vespa Sei Giorni.*/

        var finale =
            document.querySelector('.nascita-sei-giorni');


        /*Se la sezione finale esiste aggiunge la classe che la rende visibile.*/

        if (finale != null) {

            finale.classList.add(
                'finale-visibile'
            );

        }

    } catch (e) {

        alert('gestoreLoad ' + e);

    }

}


/*Avvia la funzione gestoreLoad quando la pagina è stata caricata.*/

window.onload = gestoreLoad;