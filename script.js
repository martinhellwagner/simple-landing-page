const breakpointMedium = 768;
const breakpointMax = 1200;

// Workaround for inconsistent height of mobile browsers
calculateHeight = () => {
  const container = document.querySelector('.container');

  document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
  container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
  container.classList.add('container--ready');

  initSnow();
}

// Call function
calculateHeight();
