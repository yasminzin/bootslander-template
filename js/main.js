const loader = document.querySelector(".loader");
const nav = document.querySelector(".navbar");
console.log(nav);

setTimeout(() => {
  loader.style.transition = "opacity 0.3s ease";
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 400);
}, 1000);

window.onscroll = function () {
  if (scrollY > 55) {
    nav.classList.add("sticky-bar");
  } else {
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("sticky-bar");
  }
};
