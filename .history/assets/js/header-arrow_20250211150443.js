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
        svg.setAttribute("width", "10px");
        svg.setAttribute("height", "10px");
        svg.setAttribute("viewBox", "0 0 512 512");

        // Tạo phần tử path cho mũi tên
        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path.setAttribute("fill", "#fff");
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

// Social
document.addEventListener("DOMContentLoaded", function () {
    // Mảng chứa các SVG tương ứng với từng mạng xã hội
    const svgIcons = {
        facebook: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>`,
        twitter: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg>`,
        youtube: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/></svg>`,
        linkedin: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>`,
        pinterest: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7c3.9-16 8.5-35 13.9-57.9c0 0-7.3-14.8-7.3-36.5c0-70.7 75.5-78 75.5-25c0 13.5-5.4 31.1-11.2 49.8c-3.3 10.6-6.6 21.5-9.1 32c-5.7 24.5 12.3 44.4 36.4 44.4c43.7 0 77.2-46 77.2-112.4c0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56c2 2.4 2.3 4.5 1.7 7c-1.1 4.7-3.1 12.9-4.7 19.2c-1 4-1.8 7.3-2.1 8.6c-1.1 4.5-3.5 5.5-8.2 3.3c-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8c0 84.6-53.3 152.7-127.4 152.7c-24.9 0-48.3-12.9-56.3-28.2c0 0-12.3 46.9-15.3 58.4c-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"/></svg>`,
        instagram: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>`,
        tiktok: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>`,
        google: `<svg class="footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></svg>`,
        // Thêm các mạng xã hội khác nếu cần
    };

    // Lấy tất cả các thẻ <a> trong danh sách
    const socialLinks = document.querySelectorAll(".footer__social-link");

    // Lặp qua tất cả các thẻ <a> và kiểm tra URL để gắn SVG tương ứng
    socialLinks.forEach((link) => {
        const url = link.getAttribute("href"); // Lấy href của thẻ <a>

        // Kiểm tra URL và gắn thẻ SVG tương ứng
        if (url.includes("facebook.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.facebook); // Thêm SVG Facebook vào trước <a>
        } else if (url.includes("youtube.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.youtube); // Thêm SVG YouTube vào trước <a>
        } else if (url.includes("twitter.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.twitter); // Thêm SVG Twitter vào trước <a>
        } else if (url.includes("linkedin.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.linkedin); // Thêm SVG LinkedIn vào trước <a>
        } else if (url.includes("pinterest.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.pinterest); // Thêm SVG Pinterest vào trước <a>
        } else if (url.includes("instagram.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.instagram); // Thêm SVG Instagram vào trước <a>
        } else if (url.includes("tiktok.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.tiktok); // Thêm SVG Tiktok vào trước <a>
        } else if (url.includes("google.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.google); // Thêm SVG Goofle maps vào trước <a>
        }
        // Thêm các điều kiện khác nếu bạn có thêm mạng xã hội khác
    });
});

// app
document.addEventListener("DOMContentLoaded", function () {
    // Mảng chứa các SVG tương ứng với từng mạng xã hội
    const svgIcons = {
        googleplay: `<svg class="footer__app-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>`,
        appstore: `<svg class="footer__app-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg>`,
        // Thêm các mạng xã hội khác nếu cần
    };

    // Lấy tất cả các thẻ <a> trong danh sách
    const appLinks = document.querySelectorAll(".footer__app-link");

    // Lặp qua tất cả các thẻ <a> và kiểm tra URL để gắn SVG tương ứng
    appLinks.forEach((link) => {
        const url = link.getAttribute("href"); // Lấy href của thẻ <a>

        // Kiểm tra URL và gắn thẻ SVG tương ứng
        if (url.includes("play.google.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.googleplay);
        } else if (url.includes("apps.apple.com")) {
            link.insertAdjacentHTML("beforebegin", svgIcons.appstore);
        }
        // Thêm các điều kiện khác nếu bạn có thêm mạng xã hội khác
    });
});
