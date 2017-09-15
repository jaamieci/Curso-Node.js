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

var handleResults = function(err, results, time) {
    if(err) {
        console.log("ERROR" + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + "ms)");
    }
};

/*
evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
evenDoubler(10, handleResults);
*/
var count = 0;
for (var i = 0; i < 10; i++) {
    console.log("Calling evenDoubler for value: " +1);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + "(" + time + "ms)");
        }
        if (++count === 10) {
            console.log("Done!");
        }
    });
}
console.log("...");