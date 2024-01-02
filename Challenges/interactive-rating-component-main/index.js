const ratingButtons = document.querySelectorAll(".rating");

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingButtons.forEach((rb) => {
      rb.dataset.active = "false";
    });
    btn.dataset.active = btn.dataset.active === "true" ? "false" : "true";
  });
});

const card = document.querySelector(".card");
const title = document.querySelector("h2");
const info = document.querySelector(".info");

const showThankYouMessage = () => {
  card.dataset.thank = "true";
  title.textContent = "Thank you!";
  info.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  const userRatingSpan = document.getElementById("user-selected-rating");
  ratingButtons.forEach((button, index) => {
    if (button.dataset.active === "true") userRatingSpan.textContent = index + 1;
  });
};
