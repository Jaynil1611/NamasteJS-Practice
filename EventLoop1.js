console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

// fetch("https://api.github.com").then(function cbF(){
//     console.log("CB GitHub");
// });

console.log("End");
