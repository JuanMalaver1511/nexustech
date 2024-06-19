document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.clients__carousel');
    let scrollAmount = 0;
    const scrollStep = 1;
  
    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  
    setInterval(autoScroll, 20);
  });
  