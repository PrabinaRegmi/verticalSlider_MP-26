// Bring all the required elements
const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
// to count the number of slides being used
const slideLength = rightSlide.querySelectorAll("div").length;

// Need to know the index of the active slide
let activeSlideIndex = 0;

// To bring left slide in same position with the right slide image
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

// create eventlistner for up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// create function changeSlide("direction") which works for both up and down button
const changeSlide = (direction) => {
  sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
