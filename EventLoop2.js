function callWhileLoop() {
  let startTime = new Date().getTime();
  while (new Date().getTime() - startTime < 10000) {
    console.log("Blocked Main Thread!");
  }
  document.querySelector("#clickMe").addEventListener("click", function cb() {
    console.log("Button Clicked");
  });
}

callWhileLoop();
