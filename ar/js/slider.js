document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-inner");
    carousels.forEach((carouselInner) => {
        const carouselItems = carouselInner.querySelectorAll(".carousel-item");
        let currentIndex = 0;
        carouselItems[currentIndex].classList.add("active");
        function showNextSlide() {
            carouselItems[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add("active");
        }
        setInterval(showNextSlide, 2000);
    });
});