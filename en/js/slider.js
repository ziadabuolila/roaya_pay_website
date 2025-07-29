document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-inner");

    carousels.forEach((carouselInner) => {
        const carouselItems = carouselInner.querySelectorAll(".carousel-item");
        let currentIndex = 0;

        // Initialize the first item as active
        carouselItems[currentIndex].classList.add("active");

        // Function to show the next slide
        function showNextSlide() {
            // Remove the "active" class from the current slide
            carouselItems[currentIndex].classList.remove("active");

            // Move to the next slide (loop back to the first slide if at the end)
            currentIndex = (currentIndex + 1) % carouselItems.length;

            // Add the "active" class to the new slide
            carouselItems[currentIndex].classList.add("active");
        }

        // Change slide every 2 seconds
        setInterval(showNextSlide, 2000);
    });
});