document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".achievements__title-numb");
    let section = document.querySelector(".achievements");
    let isCounted = false;

    function startCounting() {
        if (!isCounted) {
            counters.forEach((counter) => {
                let target =
                    parseInt(counter.textContent.replace(/\D/g, "")) || 0;
                let count = 0;
                let speed = Math.floor(2000 / target);

                let updateCount = () => {
                    count += Math.ceil(target / 100);
                    if (count >= target) {
                        counter.textContent = target.toLocaleString() + "+"; // Thêm dấu "+"
                    } else {
                        counter.textContent = count.toLocaleString();
                    }
                    if (count < target) {
                        setTimeout(updateCount, speed);
                    }
                };

                updateCount();
            });
            isCounted = true;
        }
    }

    function checkScroll() {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            startCounting();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
    setTimeout(checkScroll, 1000);
});
