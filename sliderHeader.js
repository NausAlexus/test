document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide-header');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-header'));
        slides[index].classList.add('active-header');

        const offset = -index * 100;
        document.querySelector('.slider-header-content').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentSlide);
});

