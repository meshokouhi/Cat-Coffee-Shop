const body = document.body;
const hamburger = document.getElementById("menu_btn");
const nav = document.getElementById("main-navigation");

hamburger.addEventListener("click", function() {
  body.classList.toggle("show");
  nav.classList.add("activated");
});
const mql = window.matchMedia("(max-width: 800px)");

mql.addListener(removeTransition);

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
    nav.classList.remove("activated");
  }
}
hamburger.addEventListener("mousedown", function(e) {
  e.preventDefault();
});



