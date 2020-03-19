// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.


var age1, age2, msg;

age1 = parseInt(prompt('Inserisci l\'età della prima persona'));
age2 = parseInt(prompt('Inserisci l\'età della seconda persona'));

if (age1 > age2) {
  msg = 'La prima persona è più grande. La sua età è '+ age1
} else if (age2 > age1) {
  msg = 'La seconda persona è più grande. La sua età è '+ age2
} else {
  msg = 'Le due persone hanno la stessa età';

}

document.getElementById('verifica').innerHTML = msg;
