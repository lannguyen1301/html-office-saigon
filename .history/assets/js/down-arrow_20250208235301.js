// home
document.querySelectorAll(".navbar__items:first-child a").forEach((a) => {
    a.insertAdjacentHTML(
        "beforeend",
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                class="icon_svg">
                                                <path
                                                    d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z">
                                                </path>
                                            </svg>`
    );
});

// Errow Down
document.querySelectorAll(".navbar__items:not(:first-child) a").forEach((a) => {
    a.insertAdjacentHTML(
        "beforeend",
        `<svg class="down-arrow" fill="#fff" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>`
    );
});

// VR 360
document.querySelectorAll(".navbar-right:first-child a").forEach((a) => {
    if (!a.querySelector(".icon_svg")) {
        // Kiểm tra xem đã có icon chưa để tránh chèn trùng
        a.insertAdjacentHTML(
            "afterbegin", // Thêm icon vào trước nội dung trong thẻ <a>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                class="icon_svg" width="16" height="16" style="margin-right: 8px;">
                <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z"/>
            </svg>`
        );
    }
});
