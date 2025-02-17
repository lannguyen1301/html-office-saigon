document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".achievements__title-numb");
    let section = document.querySelector(".achievements");
    let isCounted = false;

    function startCounting() {
        if (!isCounted) {
            counters.forEach((counter) => {
                let target = parseInt(counter.textContent.replace(/\D/g, ""));
                let count = 0;
                let speed = Math.floor(2000 / target);

                let updateCount = () => {
                    if (count < target) {
                        count += Math.ceil(target / 100);
                        counter.textContent = count.toLocaleString();
                        setTimeout(updateCount, speed);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };

                updateCount();
            });
            isCounted = true;
        }
    }

    function checkScroll() {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            startCounting();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
