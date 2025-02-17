// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    let index = 0;

    function moveSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.opacity = "0.3";
            slide.style.transform = `translateY(${
                (i - index) * 100
            }%) scale(1)`;
        });

        slides[index].classList.add("active");
        slides[index].style.opacity = "1";
        slides[index].style.transform = "translateY(0) scale(1.1)";

        setTimeout(() => {
            slider.appendChild(slides[index]); // Đưa slide đầu lên cuối danh sách
        }, 500);

        index = (index + 1) % slides.length;
    }

    setInterval(moveSlide, 3000); // Chuyển slide mỗi 3 giây
});
