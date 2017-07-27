//function returns an anonymus function
function parent(i) {
    return function() {
        setTimeout(function() {
            console.log(i);
            console.log("invoked setTimeout function after "+i+" miliseconds");
        }, i);

    }
}

//anonymus function
var anonym = parent(5);

//function which callbacks the anonymus function
function callback(fn) {
    fn();
}

//callback invoked
callback(anonym);