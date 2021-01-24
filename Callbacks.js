//Callback Function
setTimeout(function(){
    console.log("Timeout");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});