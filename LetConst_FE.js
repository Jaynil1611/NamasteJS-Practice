// function a(){
//     x = 20;
//     let x = 10;
//     console.log(x);
//     }

// a();

(function(){
    var name = new String("Sunny");
    name.toString = function(){return `Hey`};
    console.log(name.toString());
    console.log(typeof name);
})();