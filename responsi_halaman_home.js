const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function showSlide(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
  showSlide(slideIndex);
  setActiveSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
  showSlide(slideIndex);
  setActiveSlide(slideIndex);
});

// Autoplay
setInterval(() => {
  slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
  showSlide(slideIndex);
  setActiveSlide(slideIndex);
}, 5000);
