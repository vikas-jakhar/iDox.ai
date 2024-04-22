AOS.init();

const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
});

$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 3000,
    dots: false,
    arrows: false,
    cssEase: 'linear',
    waitForAnimate: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const section3heading = document.querySelectorAll(".section3-heading");

section3heading.forEach(e => {
    e.addEventListener("click", () => {
        const re = document.querySelector(".section3-heading.active1")
        e.classList.toggle("active1");
        re && re.classList.remove("active1")
    })
})