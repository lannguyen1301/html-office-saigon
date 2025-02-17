// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "top", "bottom");

            // Nếu là item đang hiển thị ở giữa
            if (i === index) {
                slide.classList.add("active");
            }
            // Nếu là item đã hiển thị rồi (trượt lên trên)
            else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("top");
            }
            // Nếu là item chưa hiển thị (nằm bên dưới)
            else {
                slide.classList.add("bottom");
            }
        });
    }

    function moveSlide() {
        index = (index + 1) % slides.length;
        updateSlides();
    }

    updateSlides(); // Khởi tạo vị trí ban đầu
    setInterval(moveSlide, 3000); // Chuyển slide mỗi 3 giây
});
