document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".achievements__title-numb");
    let section = document.querySelector(".achievements");
    let isCounted = false;

    function startCounting() {
        if (!isCounted) {
            counters.forEach((counter) => {
                let text = counter.textContent.trim();
                let numberMatch = text.match(/\d+/); // Lấy số đầu tiên trong chuỗi
                let target = numberMatch ? parseInt(numberMatch[0]) : 0;
                let prefix = text.split(numberMatch[0])[0]; // Phần "Hơn "
                let suffix = text.split(numberMatch[0])[1]; // Phần "+"

                let count = 0;
                let step = Math.ceil(target / 50); // Tăng tốc độ đếm

                let interval = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(interval);
                    }
                    counter.textContent = `${prefix}${count}${suffix}`;
                }, 50);
            });

            isCounted = true;
        }
    }

    // Lắng nghe sự kiện scroll để kích hoạt đếm số khi đến phần achievements
    function checkScroll() {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.2; // Kích hoạt khi phần tử gần vào màn hình

        if (sectionPos < screenPos) {
            startCounting();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
});
