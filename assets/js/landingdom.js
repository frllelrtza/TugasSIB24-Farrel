let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const slideWidth = items[0].clientWidth;


document.getElementById('prevBtn').addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = items.length - 1;
  }
  updateSlide();
});


document.getElementById('nextBtn').addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= items.length) {
    slideIndex = 0;
  }
  updateSlide();
});


function updateSlide() {
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

  // Update teks dinamis
  const captionText = document.querySelector('.caption-text h2');
  const captions = ['Beranda', 'Form', 'Materi JavaScript'];
  captionText.textContent = captions[slideIndex];
}


updateSlide();


function autoSlide() {
  slideIndex++;
  if (slideIndex >= items.length) {
    slideIndex = 0;
  }
  updateSlide();
  setTimeout(autoSlide, 5000); 
}


autoSlide();