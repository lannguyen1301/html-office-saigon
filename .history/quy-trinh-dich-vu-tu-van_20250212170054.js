// script.js

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".recr-content"); // Lấy danh sách tab
    let currentIndex = 0; // Chỉ mục tab hiện tại

    function activateTab(index) {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add("active"); // Kích hoạt tab
            } else {
                tab.classList.remove("active"); // Ẩn tab khác
            }
        });
    }

    // Thêm sự kiện click vào từng tab
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            currentIndex = index;
            activateTab(currentIndex);
        });
    });

    // (Tuỳ chọn) Tự động chuyển tab mỗi 4 giây
    function autoSlide() {
        currentIndex = (currentIndex + 1) % tabs.length;
        activateTab(currentIndex);
    }

    setInterval(autoSlide, 4000); // Tự động chuyển tab sau 4 giây
});
