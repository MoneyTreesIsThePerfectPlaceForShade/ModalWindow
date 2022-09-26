"use strict";

// берем всё, что нам нужно
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// применяем принцип DRY
const closeModalWindow = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const openModalWindow = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModalWindow);
}

// заметь, что метод передается без скобок, то бишь не вызываем его
// мы лишь декларируем метод, а когда происходит клик
// JS его самостоятельно вызывает
btnCloseModal.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);
