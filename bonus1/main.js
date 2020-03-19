// Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);

var d = new Date();
var minutiMancanti = 60 - d.getMinutes();


document.getElementById('time').innerHTML = 'Mancano ' + minutiMancanti + ' minuti alla fine dell\'ora.';
