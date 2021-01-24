// Event Listeners

function attachEventListeners() {
  let count = 0;
  document
    .querySelector("#clickMe")
    .addEventListener("click", function handler() {
      console.log("clicked", ++count);
    });
}

attachEventListeners();
