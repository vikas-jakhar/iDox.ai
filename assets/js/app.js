AOS.init();

const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})