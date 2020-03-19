// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni
// e del 40% per gli over 65.


// Dichiaro le variabili
var numKm, age, ticketPrice, discount;

// Chiedo all'utente il numero di chilometri
numKm = prompt('Quanti KM devi percorrere?');

// Chiedo all'utente l'età
age = prompt('Quanti anni hai?');


// Calcolo il prezzo del biglietto
ticketPrice = 0.21 * numKm;

// Verifico se l'età dell'utente è <=17 o >65 ed eventualmente applico gli specifici sconti.
if (age <= 17){
  discount = 20;
  ticketPrice = ticketPrice - (ticketPrice * discount/100);
  document.getElementById('sconto').innerHTML = 'Ha diritto ad uno sconto del ' + discount + '%';
} else if (age > 65) {
  discount = 40;
  ticketPrice = ticketPrice - (ticketPrice * discount/100);
  document.getElementById('sconto').innerHTML = 'Ha diritto ad uno sconto del ' + discount + '%';
} else {
  ticketPrice = ticketPrice;
}

document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è: ' + '€ ' + ticketPrice.toFixed(2);
