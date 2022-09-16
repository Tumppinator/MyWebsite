const btnNavEl = document.querySelector(".btn-mobile-nav");
const navHeaderEl = document.querySelector(".nav-header");

// const navBarButtonEl = document.querySelector(".navbar-button");

btnNavEl.addEventListener("click", function () {
  navHeaderEl.classList.toggle("nav-open");
});

// navBarButtonEl.addEventListener("click", function () {
//   navHeaderEl.classList.toggle("nav-open");
// });
