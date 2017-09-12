//Juego de dados
var getDieRoll = function(dieSize) {
    console.log("DieSize: " + dieSize);
    return Math.ceil(Math.random() * dieSize);
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);


console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);