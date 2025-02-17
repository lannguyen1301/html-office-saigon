document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const link = item.querySelector(".accordion__link");
        const content = item.querySelector(".sub-accordion");

        // Thiết lập CSS ban đầu
        content.style.height = "0";
        content.style.overflow = "hidden";
        content.style.transition =
            "height 0.4s ease-in-out, padding 0.4s ease-in-out";

        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Nếu đang mở thì đóng lại với hiệu ứng mượt
            if (this.classList.contains("accordion__link_active")) {
                this.classList.remove("accordion__link_active");
                content.style.height = content.scrollHeight + "px"; // Đặt lại chiều cao trước khi thu gọn
                setTimeout(() => {
                    content.style.height = "0";
                    content.style.paddingTop = "0";
                    content.style.paddingBottom = "0";
                }, 10); // Delay một chút để tránh mất hiệu ứng
            } else {
                // Đóng tất cả các mục khác trước khi mở mục mới
                accordionItems.forEach((otherItem) => {
                    const otherLink =
                        otherItem.querySelector(".accordion__link");
                    const otherContent =
                        otherItem.querySelector(".sub-accordion");

                    if (otherLink !== link) {
                        otherLink.classList.remove("accordion__link_active");
                        otherContent.style.height =
                            otherContent.scrollHeight + "px";
                        setTimeout(() => {
                            otherContent.style.height = "0";
                            otherContent.style.paddingTop = "0";
                            otherContent.style.paddingBottom = "0";
                        }, 10);
                    }
                });

                // Mở mục hiện tại với hiệu ứng trượt mượt
                this.classList.add("accordion__link_active");
                content.style.height = content.scrollHeight + 20 + "px"; // Thêm khoảng trống tránh bị lấn
                content.style.paddingTop = "15px";
                content.style.paddingBottom = "15px";
            }
        });
    });
});
