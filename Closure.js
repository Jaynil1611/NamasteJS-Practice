function x(){
    let a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
//     y();
    return y;
}

let z = x();
console.log(z);
//...................
z();