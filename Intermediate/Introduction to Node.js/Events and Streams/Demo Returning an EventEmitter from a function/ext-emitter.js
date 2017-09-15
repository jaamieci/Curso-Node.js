var Resource = require('./resource');

var r = new Resource(7);

//the start event
r.on('start', function() {
    console.log("I've started");
});

//the data event
r.on('data', function(d) {
    console.log("  I received data -> " + d);
});

//the end event
r.on('end', function(t) {
    console.log("I'am done, with " + t + " data events.");
});