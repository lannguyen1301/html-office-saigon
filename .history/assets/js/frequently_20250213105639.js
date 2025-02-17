document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const link = item.querySelector(".accordion__link");
        const content = item.querySelector(".sub-accordion");

        // Thiết lập trạng thái ban đầu
        content.style.height = "0";
        content.style.overflow = "hidden";
        content.style.transition =
            "height 0.4s ease-out, padding 0.4s ease-out";

        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Nếu mục đang mở, thì đóng lại
            if (this.classList.contains("accordion__link_active")) {
                this.classList.remove("accordion__link_active");
                content.style.height = "0";
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                // Đóng tất cả các mục khác
                accordionItems.forEach((otherItem) => {
                    const otherLink =
                        otherItem.querySelector(".accordion__link");
                    const otherContent =
                        otherItem.querySelector(".sub-accordion");

                    otherLink.classList.remove("accordion__link_active");
                    otherContent.style.height = "0";
                    otherContent.style.paddingTop = "0";
                    otherContent.style.paddingBottom = "0";
                });

                // Mở mục hiện tại và tăng khoảng trống để tránh bị lấn nền
                this.classList.add("accordion__link_active");
                content.style.height = content.scrollHeight + 20 + "px"; // Tăng thêm 20px để tránh lấn nền
                content.style.paddingTop = "15px"; // Tăng padding trên
                content.style.paddingBottom = "15px"; // Tăng padding dưới
            }
        });
    });
});
