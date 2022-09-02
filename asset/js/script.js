// Modal
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal_closebtn");
const modalOverlay = document.querySelector(".modal_close_overlay");

const closeModal = () => modal.classList.add("closed");

closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// Notification-toast
const tostCloseBtn = document.querySelector(".toast_close_btn");
const notification_toast = document.querySelector(".notification-toast");

const closeNotification = () => notification_toast.classList.add("closed");

tostCloseBtn.addEventListener("click", closeNotification);

// Mobile Navigation menu
const menuOpenBtn = document.querySelector("[data-menu-open-btn]");
const menuCloseBtn = document.querySelector(".menu_close_btn");
const mobileMenu = document.querySelector(".mobile-navigation-menu");
const overlay = document.querySelector(".overlay");

const closeMenu = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

menuOpenBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

menuCloseBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Accordian
const accBtn = document.querySelectorAll(".accordian_menu");
const accMenu = document.querySelectorAll(".sub_menu_category_list");

const showAccordianMenu = function (e) {
  console.log("hello");
  const clicked = this.nextElementSibling.classList.contains("active");

  accMenu.forEach((submenu, i) => {
    if (clicked) return;

    if (submenu.classList.contains("active")) {
      submenu.classList.remove("active");
      accBtn[i].classList.remove("active");
    }
  });

  this.nextElementSibling.classList.toggle("active");
  this.classList.toggle("active");
};

accBtn.forEach((list) => {
  list.addEventListener("click", showAccordianMenu);
});
