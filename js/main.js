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

// let countOne = 0;
// countOneP.innerText = "0";

// let countTwo = 0;
// countTwoP.innerText = "0";

// let countThree = 0;
// countThreeP.innerText = "0";

window.onscroll = function () {
  if (scrollY > 55) {
    nav.classList.add("sticky-bar");
  } else {
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("sticky-bar");
  }
  // if (scrollY > 900) {
  //   var newInterval = setInterval(() => {
  //     if (countOne == 4000) {
  //       clearInterval(newInterval);
  //       countOneP.innerText = `4,000+`;
  //       return;
  //     }
  //     countOne++;
  //     countOneP.innerText = `${countOne}+`;
  //   }, 50);
  //   var newInterval = setInterval(() => {
  //     if (countTwo == 49) {
  //       clearInterval(newInterval);
  //       countTwoP.innerText = `49`;
  //       return;
  //     }
  //     countTwo++;
  //     countTwoP.innerText = `${countTwo}`;
  //   }, 1000);
  //   var newInterval = setInterval(() => {
  //     if (countThree == 12) {
  //       clearInterval(newInterval);
  //       countThreeP.innerText = `12`;
  //       return;
  //     }
  //     countThree++;
  //     countThreeP.innerText = `${countThree}`;
  //   }, 1000);
  // } 
};

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

