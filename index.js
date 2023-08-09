(function () {
  let slideIndex = 0;

  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const sliderControls = document.getElementsByClassName("slider-controls");
    if (slides.length > 1) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
    } else {
      sliderControls[0].style.display = "none";
    }
    setTimeout(showSlides, 5000); 
  }

  function prevSlide() {
    slideIndex--;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  function nextSlide() {
    slideIndex++;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  function initSlider() {
    showSlides();
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  }

  initSlider();
})();
