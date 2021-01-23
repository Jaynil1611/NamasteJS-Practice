// Function Statement , Function Declaration
function a(){
    console.log("Function Statement");
}

// Function Expression
var b = function (){
    console.log("Function Expression");
}

a();
b();

//Anonymous Function
// function() {

// }

//Named Function Expression
var c = function x(){
    console.log("Named Function Expression");
    console.log(x);
}

c();
// x(); // not accessible

//First Class Functions
// Ability to used like values, arguments and returnable values