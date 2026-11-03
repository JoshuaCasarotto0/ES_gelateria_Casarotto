let incasso = 0;
let ordini = 0;
document.getElementById("ordini").innerHTML = ordini;
document.getElementById("incasso").innerHTML = incasso;
const peso_pallina = 110;
let peso_fragola = 5000;
let peso_cioccolata = 5000;
let peso_stracciatella = 5000;
let peso_biscotto = 5000;
let peso_vaniglia = 5000;


function scontrino(){
    let palline = Number(document.getElementById("quantita").value);
    let contenitoreSelezionato = document.querySelector('input[name="contenitore"]:checked');
    let gusto = document.getElementById("gusto").value;
    let aggiunte = document.querySelectorAll('input[name="aggiunte"]:checked');
    let messaggio_scontrino = document.getElementById("messaggio_scontrino");
    let prezzo = 0;

    if(messaggio_scontrino === null){
        console.error("Valore messaggio non trovato");
        return;
    }
    //Errore palline
    if(!Number.isInteger(palline) || palline<1 || palline>3){
        messaggio_scontrino.innerHTML = "<b>Il massimo di palline è 3 e il minimo 1 (numero intero)</b>";
        return;
    }
    //Errore contenitore
    if(contenitoreSelezionato === null){
        messaggio_scontrino.innerHTML = "<b>Scegli tra cono o coppetta</b>";
        return;
    }
    //Errore gusto
    if(gusto == "0"){
        messaggio_scontrino.innerHTML = "<b>Seleziona un gusto</b>";
        return;
    }

    messaggio_scontrino.innerHTML = "";
    let contenitore = contenitoreSelezionato.value;

    let grammi = palline*110;
    switch(gusto){
        //fragola
        case "fr":
            if(peso_fragola >= grammi){
                peso_fragola -= grammi;
            }else{
                messaggio_scontrino.innerHTML = "<b>Gusto fragola esaurito</b>";
                return;
            }
            break;
        //cioccolata
        case "ci":
            if(peso_cioccolata >= grammi){
                peso_cioccolata -= grammi;
            }else{
                messaggio_scontrino.innerHTML = "<b>Gusto cioccolata esaurito</b>";
                return;
            }
            break;
        //stracciatella
        case "st":
            if(peso_stracciatella >= grammi){
                peso_stracciatella -= grammi;
            }else{
                messaggio_scontrino.innerHTML = "<b>Gusto stracciatella esaurito</b>";
                return;
            }
            break;
        //biscotto
        case "bi":
            if(peso_biscotto >= grammi){
                peso_biscotto -= grammi;
            }else{
                messaggio_scontrino.innerHTML = "<b>Gusto biscotto esaurito</b>";
                return;
            }
            break;
        //vaniglia
        case "vn":
            if(peso_vaniglia >= grammi){
                peso_vaniglia -= grammi;
            }else{
                messaggio_scontrino.innerHTML = "<b>Gusto vaniglia esaurito</b>";
                return;
            }
            break;
    }
    ordini += 1;
    prezzo = (palline * 1.20) + (aggiunte.length * 0.50);

    if(contenitore == "cono"){
        prezzo += 0.10;
    } else {
        prezzo += 0.20;
    }

    incasso += prezzo;
    document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + " €";
    document.getElementById("ordini").innerHTML = ordini;
    document.getElementById("incasso").innerHTML = incasso.toFixed(2);
}

function fine_giornata(){

    let risultato = document.getElementById("risultato_giornata");

    risultato.innerHTML =
        "Gelato rimanente:<br>" +
        "<span style='color:#b14c4c'><b>Fragola:</b></span> " + peso_fragola + " grammi<br>" +
        "<span style='color:#b14c4c'><b>Cioccolata:</b></span> " + peso_cioccolata + " grammi<br>" +
        "<span style='color:#b14c4c'><b>Stracciatella:</b></span> " + peso_stracciatella + " grammi<br>" +
        "<span style='color:#b14c4c'><b>Biscotto:</b></span> " + peso_biscotto + " grammi<br>" +
        "<span style='color:#b14c4c'><b>Vaniglia:</b></span> " + peso_vaniglia + " grammi<br><br>";
}