function receivesAFunction (cb) {
    return cb();
}


function thing() {
    console.log('I am thing')
}


function returnsANamedFunction () {
    return thing;
}


function returnsAnAnonymousFunction () {
    return function() {
        console.log('I am anonymous')
    }
}