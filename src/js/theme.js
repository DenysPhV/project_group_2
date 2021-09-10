const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  body: document.querySelector(`body`),
  themeSwitch: document.querySelector(`.theme-switch__toggle`),
  header: document.querySelector('.header'), //AB
};

ref.themeSwitch.addEventListener('change', onChecked);

function onChecked() {
  const check = ref.themeSwitch.checked;

  if (check) {
    ref.body.classList.add(`dark-theme`);
    ref.body.classList.remove(`light-theme`);
    ref.header.classList.add(`dark-theme`); //AB
  } else {
    ref.body.classList.add(`light-theme`);
    ref.body.classList.remove(`dark-theme`);
    ref.header.classList.remove(`dark-theme`); //AB
  }
}

ref.themeSwitch.addEventListener('change', creatLocalStorage);

function creatLocalStorage() {
  const check = ref.themeSwitch.checked;
  if (check) {
    localStorage.setItem(`theme`, `dark-theme`);
    document.querySelector(`.theme-switch__marker`).style.transitionDuration = '250ms'; //AB
  } else {
    localStorage.removeItem(`theme`);
    localStorage.setItem(`theme`, `light-theme`);
    document.querySelector(`.theme-switch__marker`).style.transitionDuration = '250ms'; //AB
  }
}

const inLocal = localStorage.getItem(`theme`);

if (inLocal === `dark-theme`) {
  ref.body.classList.add(`dark-theme`);
  ref.themeSwitch.checked = true;
}
