var maxTime = 1000;

//if input is even, double it
//if input is odd, error
//(call takes random amount of time < 1s)

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1)); //tiempo maximo 
    if(v%2) {
        setTimeout(function () {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

module.exports.evenDoubler = evenDoubler;
module.exports.foo = 'bar';
