// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    let index = 0;

    function moveSlide() {
        slides[index].style.transform = `translateY(-100%)`;

        setTimeout(() => {
            slider.appendChild(slides[index]); // Đưa slide lên đầu xuống cuối
            slides[index].style.transform = `translateY(0)`;
        }, 500);

        index = (index + 1) % slides.length;
    }

    setInterval(moveSlide, 3000); // Chuyển slide mỗi 3 giây
});
