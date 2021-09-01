// MODAL
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");
const footerClose = document.querySelector(".js-footer-close");
// Open modal
function showModal() {
    modal.classList.add("open");
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showModal);
}
// Close modal
function hideModal() {
    modal.classList.remove("open");
}
modalClose.addEventListener("click", hideModal);
footerClose.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
// stopPropagation
modalContainer.addEventListener("click", function (e) {
    e.stopPropagation();
});
// END MODAL

// HEADER RESPONSIVE MENU
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
// set riêng cho mobile
var x = window.matchMedia("(max-width: 739px)");

// Đóng mở menu
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null; // Bỏ inline style
    }
};
// Đóng mở submenu khi click more (chỉ dùng trên mobile)
var isOpenSubMenu = false;
function ToggleSubmenu() {
    if (x.matches) {
        isOpenSubMenu = !isOpenSubMenu;
        if (isOpenSubMenu) {
            document.querySelector("#nav .subnav").style.position = "initial";
        } else {
            document.querySelector("#nav .subnav").style.position = "absolute";
        }
    }
}
// Tự động đóng menu khi chọn thẻ a
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (const menuItem of menuItems) {
    menuItem.onclick = function (e) {
        // console.log(menuItem);
        // Kiểm tra thẻ a có phải là more hay không mỗi lần click
        var isParentMenu =
            this.nextElementSibling &&
            this.nextElementSibling.classList.contains("subnav");
        if (isParentMenu) {
            e.preventDefault();
            ToggleSubmenu();
        } else header.style.height = null;
    };
}
//  END HEADER RESPONSIVE MENU

// SLIDER
const slides = document.querySelectorAll(".slide");
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
};
// Auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
