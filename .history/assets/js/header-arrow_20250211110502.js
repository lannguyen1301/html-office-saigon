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
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar-right a.navbar__vr360").forEach((a) => {
        if (!a.querySelector(".navbar__vr360-svg")) {
            // Kiểm tra nếu icon chưa tồn tại
            a.insertAdjacentHTML(
                "afterbegin", // Thêm SVG vào trước nội dung của thẻ <a>
                `<svg
    class="navbar__vr360-svg"
    width="30px"
    height="auto"
    viewBox="0 -7.5 38 38"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <title>vr</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g
        id="Vivid.JS"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
    >
        <g id="Vivid-Icons" transform="translate(-666.000000, -260.000000)">
            <g id="Icons" transform="translate(37.000000, 169.000000)">
                <g id="vr" transform="translate(624.000000, 78.000000)">
                    <g transform="translate(5.000000, 13.000000)" id="Shape">
                        <polygon
                            fill="#0C0058"
                            points="14.035 14.992 14 20.006 24 20.006 23.961 14.992"
                        ></polygon>
                        <path
                            d="M25,23 L22.055,17.315 C20.436,14.19 17.555,14.19 15.932,17.315 L12.743,23 L2,23 L2,3 L36,3 L36,23 L25,23 Z"
                            fill="#FF6E6E"
                        ></path>
                        <path
                            d="M30.995,2.988 L31,0 L7,0 L7.005,2.988 L30.995,2.988 Z M36,9 L38,9 L38,16 L36,16 L36,9 Z M0,9 L2,9 L2,16 L0,16 L0,9 Z M10.5,10 C11.8807119,10 13,11.1192881 13,12.5 C13,13.8807119 11.8807119,15 10.5,15 C9.11928813,15 8,13.8807119 8,12.5 C8,11.1192881 9.11928813,10 10.5,10 Z M27.5,10 C28.8807119,10 30,11.1192881 30,12.5 C30,13.8807119 28.8807119,15 27.5,15 C26.1192881,15 25,13.8807119 25,12.5 C25,11.1192881 26.1192881,10 27.5,10 Z"
                            fill="#0C0058"
                        ></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`
            );
        }
    });
});

// Breadcrumb arrow
document.addEventListener("DOMContentLoaded", function () {
    // Chọn tất cả các <li> trong .breadcrumb__list
    const navbarItems = document.querySelectorAll(
        ".breadcrumb__list li.breadcrumb__item"
    );

    // Kiểm tra nếu có ít nhất 1 <li> để tránh lỗi
    if (navbarItems.length > 0) {
        // Lấy phần tử <li> cuối cùng
        const lastItem = navbarItems[navbarItems.length - 1];

        // Lặp qua tất cả các <li>, nhưng bỏ qua phần tử cuối cùng
        navbarItems.forEach((item, index) => {
            if (item !== lastItem) {
                // Tránh phần tử cuối cùng
                const link = item.querySelector("a");

                // Chỉ thêm SVG nếu chưa có (tránh chèn trùng lặp)
                if (link && !link.querySelector(".breadcrumb-arrow")) {
                    link.insertAdjacentHTML(
                        "beforeend",
                        `<svg class="breadcrumb-arrow" width="12px" height="12px" 
                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#333" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
                        </svg>`
                    );
                }
            }
        });
    }
});

// Footer arrow
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử <a> trong các <li> có class 'footer__item'
    const footerLinks = document.querySelectorAll(
        ".footer__item a.footer__link"
    );

    // Lặp qua tất cả các phần tử <a>
    footerLinks.forEach((link) => {
        // Tạo phần tử SVG
        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svg.setAttribute("class", "footer-arrow");
        svg.setAttribute("width", "12px");
        svg.setAttribute("height", "12px");
        svg.setAttribute("viewBox", "0 0 512 512");

        // Tạo phần tử path cho mũi tên
        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path.setAttribute("fill", "#333");
        path.setAttribute(
            "d",
            "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
        );

        // Gắn phần tử path vào thẻ svg
        svg.appendChild(path);

        // Chèn SVG vào trước thẻ <a>
        link.insertAdjacentElement("beforebegin", svg);
    });
});
