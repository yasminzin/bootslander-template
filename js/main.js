window.scrollTo(0, 0);

const loader = document.querySelector(".loader");
const nav = document.querySelector(".navbar");
// const numbers = document.querySelector(".number");

setTimeout(() => {
  loader.style.transition = "opacity 0.3s ease";
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 400);
}, 1000);

const countOneP = document.querySelector(".count-one");
const countTwoP = document.querySelector(".count-two");
const countThreeP = document.querySelector(".count-three");
const countFourP = document.querySelector(".count-four");

let countOne = 0;

let countTwo = 0;

let countThree = 0;

let countFour = 0;

window.onscroll = function () {
  if (scrollY > 55) {
    nav.classList.add("sticky-bar");
  } else {
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("sticky-bar");
  }
  if (scrollY > 1600) {
    var newInterval = setInterval(() => {
      if (countOne == 232) {
        clearInterval(newInterval);
        countOneP.innerText = `232`;
        return;
      }
      countOne++;
      countOneP.innerText = `${countOne}`;
    }, 1000);
    var newInterval = setInterval(() => {
      if (countTwo == 521) {
        clearInterval(newInterval);
        countTwoP.innerText = `521`;
        return;
      }
      countTwo++;
      countTwoP.innerText = `${countTwo}`;
    }, 500);
    var newInterval = setInterval(() => {
      if (countThree == 1463) {
        clearInterval(newInterval);
        countThreeP.innerText = `1463`;
        return;
      }
      countThree++;
      countThreeP.innerText = `${countThree}`;
    }, 180);
  } 
    var newInterval = setInterval(() => {
      if (countFour == 15) {
        clearInterval(newInterval);
        countFourP.innerText = `15`;
        return;
      }
      countFour++;
      countFourP.innerText = `${countFour}`;
    }, 1500);
  } 

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
};

const elements = document.querySelectorAll('.forAnimate');
console.log(elements)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.7,
});

elements.forEach((element) => {
  observer.observe(element);
});

