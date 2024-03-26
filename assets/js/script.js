let string = alert("Selamat Datang!"); 


let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.carousel-item');
  const slideWidth = items[0].clientWidth;
  
  slideIndex++;
  if (slideIndex >= items.length) {
    slideIndex = 0;
  }
  
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function toggleDropdown() {
  var dropdownMenu = document.getElementById("myDropdown");
  dropdownMenu.classList.toggle("show-dropdown");
}

window.addEventListener('click', function(event) {
  var dropdownMenu = document.getElementById("myDropdown");
  if (event.target != dropdownMenu && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show-dropdown');
  }
});
