  let currentIndex = 0;
  const images = document.getElementById("carouselImages");
  const totalImages = 3;

  function showSlide(index) {
    if (index >= totalImages) currentIndex = 0;
    else if (index < 0) currentIndex = totalImages - 1;
    else currentIndex = index;

    images.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto-play every 4 seconds
  setInterval(nextSlide, 4000);
