const burger = document.querySelector(".burger");
const menu = document.querySelector(".burger__menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const buttonCount = document.querySelectorAll(".product__button");
const count = document.querySelector(".card__count");

let amount = 0;

buttonCount.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!count.classList.contains(".active")) {
      count.classList.add("active");
    }
    amount += 1;
    count.textContent = amount;
  });
});
