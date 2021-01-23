function z(a){
    let b = 900;
    return function x(b){
        let a = 100;
        a = 500;
        return function y(c){
            console.log(a, b, c);
        }
        
    }
}

z(10)('hello you!')(20);