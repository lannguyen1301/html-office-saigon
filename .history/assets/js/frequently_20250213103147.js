document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const link = item.querySelector(".accordion__link");

        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Kiểm tra nếu đang mở thì đóng lại
            if (this.classList.contains("accordion__link_active")) {
                this.classList.remove("accordion__link_active");
                this.nextElementSibling.style.display = "none";
            } else {
                // Đóng tất cả các mục khác
                accordionItems.forEach((otherItem) => {
                    otherItem
                        .querySelector(".accordion__link")
                        .classList.remove("accordion__link_active");
                    otherItem.querySelector(".sub-accordion").style.display =
                        "none";
                });

                // Mở mục được click vào
                this.classList.add("accordion__link_active");
                this.nextElementSibling.style.display = "block";
            }
        });
    });
});
