function toggleMenu() {
    const menu = document.querySelector('.header__menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel__item');
    slideIndex += step;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel__items').style.transform = newTransform;
}
