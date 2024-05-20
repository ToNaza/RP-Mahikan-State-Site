document.getElementById("open").addEventListener("click", function () {
    document.getElementById("modul").classList.add("open");
  });
  
  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modul").classList.remove("open");
  });




  let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}