/*
    Emit
     ||
on/addListner
     ||
removeListner
     ||
removeAllListner


listenercount()
*/
const eventemitter = require('events') //1st class call
const ee = new eventemitter(); // after make object of class

//ee.on/ee.addlistner
ee.on('start', (start, end) => {
    console.log('Started from' + start + "to" + end);

});
ee.emit('start', 1, 100)

// emit to trigger the event named start