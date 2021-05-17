const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const avatarDate = document.querySelector(".avatar-date");
avatarDate.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

const shareContainer = document.querySelector(".share-container");
const shareBtn = document.querySelector(".shareBtn");

shareBtn.addEventListener("click", function () {
  shareContainer.classList.toggle("share-container-toggle");
});
