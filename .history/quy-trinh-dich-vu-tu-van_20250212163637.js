// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    let index = 0;

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "top", "bottom");

            if (i === index) {
                slide.classList.add("active"); // Item ở giữa
            } else if (i === (index + slides.length - 1) % slides.length) {
                slide.classList.add("top"); // Item trên (hiển thị rồi)
            } else {
                slide.classList.add("bottom"); // Item dưới (chưa hiển thị)
            }
        });
    }

    function moveSlide() {
        index = (index + 1) % slides.length;
        updateSlides();

        setTimeout(() => {
            slider.appendChild(slides[index]); // Đưa item cũ xuống cuối danh sách
        }, 500);
    }

    updateSlides(); // Khởi tạo vị trí ban đầu
    setInterval(moveSlide, 3000); // Chuyển slide mỗi 3 giây
});
