let darkMode = localStorage.getItem('darkMode');

const themeControl = document.querySelector('.theme-control');

const enableDarkMode = () => {
  document.body.classList.add('dark-theme');

  localStorage.setItem('darkMode', 'enabled');

  themeControl.innerHTML = '<i class="fa-solid fa-sun"></i>';

}


const disableDarkMode = () => {
  document.body.classList.remove('dark-theme');

  localStorage.setItem('darkMode', null);

  themeControl.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

if (darkMode === 'enabled') {
  enableDarkMode();
}


themeControl.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})
