let menuButton = document.querySelector(".enjoy_btn");
let menuNav = document.querySelector(".menu");
menuButton.addEventListener("click", function () {
  window.location.href = "menu";
});
menuNav.addEventListener("click", function () {
  window.location.href = "menu";
});

let burgermenuIcon = document.querySelector(".burgermenu_icon");
let navigation = document.querySelector(".navigation");
let body = document.querySelector("body");
let header = document.querySelector("header");
let burgerLink = document.querySelectorAll(".burger_link");

function openMenu(delay) {
  if (burgermenuIcon.classList.contains("burger_active")) {
    burgermenuIcon.classList.remove("burger_active");
    navigation.classList.remove("nav_active");

    navigation.classList.add("removeBurger");
    setTimeout(function () {
      navigation.classList.remove("removeBurger");
      header.classList.remove("header_active");
      body.classList.remove("no-scroll");
    }, delay);
  } else {
    body.classList.add("no-scroll");
    setTimeout(() => {
      window.scrollTo(0, 0);
      burgermenuIcon.classList.add("burger_active");
      navigation.classList.add("nav_active");
      header.classList.add("header_active");
    }, 100);
  }
}

burgermenuIcon.addEventListener("click", function () {
  openMenu(1500);
});

burgerLink.forEach((e) => {
  e.addEventListener("click", function () {
    openMenu(500);
  });
});

let interval;
let remaining = 5000;
let lastSlideTime;

function startSlideAuto() {
  lastSlideTime = Date.now();
  interval = setInterval(slideNext, remaining);
}

function stopSlideAuto() {
  clearInterval(interval);
  remaining = remaining - (Date.now() - lastSlideTime);
}

function slideAuto() {
  stopSlideAuto();
  remaining = 5000;
  startSlideAuto();
}

document.querySelector(".btn_right").addEventListener("click", function () {
  slideNext();
  slideAuto();
});

document.querySelector(".btn_left").addEventListener("click", function () {
  slidePrev();
  slideAuto();
});

slideAuto();

let touchStartX;
let touchEndX;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  stopSlideAuto();
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (touchStartX - touchEndX > 100) {
    slideNext();
    slideAuto();
  } else if (touchEndX - touchStartX > 100) {
    slidePrev();
    slideAuto();
  }
}

document
  .querySelector(".carousel_box")
  .addEventListener("touchstart", handleTouchStart);
document
  .querySelector(".carousel_box")
  .addEventListener("touchmove", handleTouchMove);
document
  .querySelector(".carousel_box")
  .addEventListener("touchend", handleTouchEnd);

let carouselBox = document.querySelector(".carousel_box");

let dashes = document.querySelectorAll(".dash");
let enterStart;
function slideNext() {
  let currentSlide = document.querySelector(".carousel");
  if (currentSlide.classList[1] == "slide1") {
    currentSlide.classList.add("slide2");
    currentSlide.classList.remove("slide1");
  } else if (currentSlide.classList[1] == "slide2") {
    currentSlide.classList.add("slide3");
    currentSlide.classList.remove("slide2");
  } else if (currentSlide.classList[1] == "slide3") {
    currentSlide.classList.add("slide1");
    currentSlide.classList.remove("slide3");
  }
  dashes.forEach((e) => {
    e.classList.remove("dash_active");
  });
  dashes[currentSlide.classList[1][5] - 1].classList.add("dash_active");
}

function slidePrev() {
  let currentSlide = document.querySelector(".carousel");
  if (currentSlide.classList[1] == "slide1") {
    currentSlide.classList.add("slide3");
    currentSlide.classList.remove("slide1");
  } else if (currentSlide.classList[1] == "slide2") {
    currentSlide.classList.add("slide1");
    currentSlide.classList.remove("slide2");
  } else if (currentSlide.classList[1] == "slide3") {
    currentSlide.classList.add("slide2");
    currentSlide.classList.remove("slide3");
  }
  dashes.forEach((e) => {
    e.classList.remove("dash_active");
  });
  dashes[currentSlide.classList[1][5] - 1].classList.add("dash_active");
}

const mq = window.matchMedia("(min-width: 500px)");
const element = document.querySelector(
  ".coffe_slide_2>.coffee_slider_info>.coffee_slider_about"
);

function changeText() {
  if (mq.matches) {
    element.textContent =
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.";
  } else {
    element.textContent =
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with the addition of delicate cream under whipped thick foam.";
  }
}

changeText();
mq.addListener(changeText);
