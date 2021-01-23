function Counter(){
    var count = 0; 

    this.incrementCounter = function(){
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

var firstCounter = new Counter();
firstCounter.incrementCounter();
firstCounter.incrementCounter();
firstCounter.decrementCounter();