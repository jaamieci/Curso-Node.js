//Instrucciones ejecutadas desde la consola de Node

var lunch = 'pizza';
console.log(lunch);
//> lunch
//'pizza'
//> lunch = 'fish and chips'
lunch = 'fish and chips'
console.log(lunch);
//> 'abc'
//'abc'
console.log('abc');
//> sizeOfParty = 4
//4
var sizeOfParty = 4;
console.log(sizeOfParty);

//> totalCost = 14.99
//14.99
var totalCost = 14.99;
console.log(totalCost);
//> totalCost / sizeOfParty
//3.7475

var averageCost = totalCost/sizeOfParty;
console.log(averageCost);

//> averageCost = totalCost/sizeOfParty
//3.7475
//> averageCost
//3.7475
var message = 'Your lunch of ' + lunch + ' for ' + sizeOfParty + ' people will cost you ' + averageCost;
console.log(message);


//> message = 'Your lunch of ' + lunch + 'for' + sizeOfParty + 'people will cost you' + averageCost
//'Your lunch of fish and chipsfor4people will cost you3.7475'
//> message = 'Your lunch of ' + lunch + 'for ' + sizeOfParty + 'people will cost you ' + averageCost
//'Your lunch of fish and chipsfor 4people will cost you 3.7475'
//> message
//'Your lunch of fish and chipsfor 4people will cost you 3.7475'