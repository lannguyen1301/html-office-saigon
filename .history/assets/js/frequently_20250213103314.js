document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const link = item.querySelector(".accordion__link");
        const content = item.querySelector(".sub-accordion");

        // Đặt chiều cao ban đầu về 0 để ẩn nội dung
        content.style.maxHeight = "0";
        content.style.overflow = "hidden";
        content.style.transition =
            "max-height 0.3s ease-out, padding 0.3s ease-out";

        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Kiểm tra nếu đang mở thì đóng lại
            if (this.classList.contains("accordion__link_active")) {
                this.classList.remove("accordion__link_active");
                content.style.maxHeight = "0";
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
                    otherContent.style.maxHeight = "0";
                    otherContent.style.paddingTop = "0";
                    otherContent.style.paddingBottom = "0";
                });

                // Mở mục được click vào
                this.classList.add("accordion__link_active");
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            }
        });
    });
});
