<script>
  const slider = document.getElementById('slider');
  const slides = slider.querySelectorAll('img');
  let currentIndex = 0;
  const visibleSlides = 3; // 🔥 Mostramos 3 a la vez

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex < slides.length - visibleSlides) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  // Opcional: auto-slide
  // setInterval(nextSlide, 4000);
</script>