function initCarousel(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId);
  const prev = document.getElementById(prevBtnId);
  const next = document.getElementById(nextBtnId);

  let card = carousel.querySelector('.flex-none');
  let style = window.getComputedStyle(card);
  let gap = parseInt(style.marginRight) || 16;
  let cardWidth = card.offsetWidth + gap;

  // Forzar que inicie al primer álbum
  window.addEventListener('load', () => {
    carousel.scrollLeft = 0;
  });

  // Recalcular ancho al redimensionar
  window.addEventListener('resize', () => {
    card = carousel.querySelector('.flex-none');
    style = window.getComputedStyle(card);
    gap = parseInt(style.marginRight) || 16;
    cardWidth = card.offsetWidth + gap;
  });

  prev.addEventListener('click', () => {
    const newScroll = Math.max(0, carousel.scrollLeft - cardWidth);
    carousel.scrollTo({ left: newScroll, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const newScroll = Math.min(maxScroll, carousel.scrollLeft + cardWidth);
    carousel.scrollTo({ left: newScroll, behavior: 'smooth' });
  });
}

// Inicializar ambos carruseles
initCarousel('carousel', 'prev', 'next');
initCarousel('carouselClasicos', 'prevClasicos', 'nextClasicos');
