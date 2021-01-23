console.clear()
// console.log(typeof foo);
// function foo(){
//     return "bar";
// }

// var foo = "bar";

foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();