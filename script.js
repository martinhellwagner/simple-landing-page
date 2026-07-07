const breakpointMedium = 768;
const breakpointMax = 1200;

calculateHeight = () => {
  const container = document.querySelector('.container');

  document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
  container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
  container.classList.add('container--ready');

  initSnow();
}

calculateHeight();
