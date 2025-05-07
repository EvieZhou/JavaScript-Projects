// Modal variables
var modal = document.getElementById("myModal");
var slideIndex = 1;

// Open the modal
function openModal() {
  modal.style.display = "block";
  showSlides(slideIndex);
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

// Show specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show slides
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

