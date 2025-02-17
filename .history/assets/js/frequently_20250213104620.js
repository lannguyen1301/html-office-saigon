document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const link = item.querySelector(".accordion__link");
        const content = item.querySelector(".sub-accordion");

        // Đặt các thuộc tính CSS ban đầu để đảm bảo animation mượt
        content.style.height = "0";
        content.style.overflow = "hidden";
        content.style.transition =
            "height 0.3s ease-out, padding 0.3s ease-out";

        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Nếu item đang mở thì đóng lại
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

                // Mở mục được click vào và tính toán chiều cao động
                this.classList.add("accordion__link_active");
                content.style.height = content.scrollHeight + "px"; // Lấy chiều cao thực tế của nội dung
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            }
        });
    });
});
