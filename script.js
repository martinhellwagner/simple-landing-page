// Reload on orientation change
window.addEventListener('orientationchange', () => {
  window.location.reload();
});

// Set container height
const container = document.querySelector('.container');
const height = Math.max(window.innerHeight, container.getBoundingClientRect().height);

document.body.style.setProperty('--windowHeight', `${height}px`);
container.style.setProperty('--windowHeight', `${height}px`);

// Show images on load
const images = container.querySelectorAll('img');
let loadedImages = 0;

images.forEach(() => {
  loadedImages++;

  if (images.length === loadedImages) {
    container.classList.add('container--ready');
  }
});
