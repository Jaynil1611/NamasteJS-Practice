console.clear();

function foo(){
    console.log(this);
}

foo();

function foo(){
    console.log(this);
}

new foo();