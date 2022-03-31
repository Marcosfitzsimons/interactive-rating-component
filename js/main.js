// Get DOM elements

const ratings = Array.from(document.querySelectorAll(".rating-list__item"));

const score = document.getElementById("score");
const submitButton = document.getElementById("submit-button");
const firstState = document.querySelector(".first-state-container");
const secondState = document.querySelector(".second-state");
const backArrow = document.querySelector(".back-arrow");
let startScore = 3;

ratings.forEach((rating) => {
  rating.addEventListener("click", handleRatingBtnClick);
});

function handleRatingBtnClick(event) {
  ratings.forEach((rating) => {
    rating.classList.remove("selected");
  });
  event.target.classList.add("selected");
  startScore = event.target.textContent;
}

submitButton.addEventListener("click", onSubmit);

function onSubmit() {
  firstState.classList.add("hidden");
  secondState.classList.remove("hidden");
  score.textContent = startScore;
}

backArrow.addEventListener("click", () => {
  secondState.classList.add("hidden");
  firstState.classList.remove("hidden");
});
