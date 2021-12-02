


function receivesAFunction(callback) {

    return callback();

}

function returnsANamedFunction() {

    return function receivesAFunction(){}
}
returnsANamedFunction();
 
function returnsAnAnonymousFunction() {

    return function () {

    }
}
