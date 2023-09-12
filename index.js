function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Return namedFunction');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Returns an anonymous function');
    }
}