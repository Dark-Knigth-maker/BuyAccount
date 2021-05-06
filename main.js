// loader
window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2")
})

// Nav
const btnToggle = document.querySelector(".nav__icon-btn");

btnToggle.addEventListener("click", function () {
    document.getElementById("nav__ul").classList.toggle("active");
});

const btnResponsive = document.querySelector(".nav__responsive-button");

btnResponsive.addEventListener("click", function () {
    document.getElementById("nav__responsive-ul").classList.toggle("active");
});