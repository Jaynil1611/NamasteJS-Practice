function callWhileLoop() {
  let startTime = Date.now();
  while (Date.now() - startTime < 10000) {
    console.log("Blocked Main Thread!");
  }
  document.querySelector("#clickMe").addEventListener("click", function cb() {
    console.log("Button Clicked");
  });
}

callWhileLoop();
