function x(){
    var a = 10, b = 20;
    return function(){
        console.log(a);
    }
}
x()();