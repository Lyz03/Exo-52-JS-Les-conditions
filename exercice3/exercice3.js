/* Modifier le code ci dessous pour réaliser l'exercice */
let x = 1;
let y = 1;


if (x === y) {
    document.getElementById('monDiv').innerHTML = "La variable x est strictement égale à la variable y";
}
else {
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas strictement égale à la variable y";
}

x += 3

if (x === y) {
    document.getElementById('monDiv2').innerHTML = "La variable x est strictement égale à la variable y";
}
else {
    document.getElementById('monDiv2').innerHTML = "La variable x n'est pas strictement égale à la variable y";
}