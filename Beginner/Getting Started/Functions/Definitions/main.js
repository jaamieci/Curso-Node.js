//Juego de dados
var getDieRoll = function() {
    console.log("rolling a die");
    return Math.ceil(Math.random() * 6);
};

var firstDie = getDieRoll();
var secondDie = getDieRoll();


console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);