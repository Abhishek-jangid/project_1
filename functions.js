
console.log('--')
// function statement
function a(){
    console.log('this is function statement!')
}
a();

// function expression
// b();
var  b = function (){
    console.log("this is function expression")
}
b();

// anonymous function
// function (){
// }

// named function expression
var c = function xyz(){
    console.log("this is named function expression")
}
c();

// parameters
function d(param1, param2){
    console.log("param1 & param2 are parameters")
}

// arguments | 1 & 2 are arguments
d(1, 2);


// First class functions
// ability to treat functions as variables,
// pass function as arguments and return from another functions
// also know as First Class Citizens

// Arrow functions
var arrowFunction = () => {
    console.log('arrow function called');
}
arrowFunction();