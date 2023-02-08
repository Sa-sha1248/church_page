let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  slides[slideIndex-1].style.display = "block";
  if (slideIndex == slides.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}