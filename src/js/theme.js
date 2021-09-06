const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  body: document.querySelector(`body`),
  themeSwitch: document.querySelector(`.theme-switch__toggle`),
};

ref.themeSwitch.addEventListener('change', onChecked);

function onChecked() {
  const check = ref.themeSwitch.checked;
  if (check) {
    ref.body.classList.add(`dark-theme`);
    ref.body.classList.remove(`light-theme`);
  } else {
    ref.body.classList.add(`light-theme`);
    ref.body.classList.remove(`dark-theme`);
  }
}

ref.themeSwitch.addEventListener('change', creatLocalStorage);

function creatLocalStorage() {
  const check = ref.themeSwitch.checked;
  if (check) {
    localStorage.setItem(`theme`, `dark-theme`);
  } else {
    localStorage.removeItem(`theme`);
    localStorage.setItem(`theme`, `light-theme`);
  }
}

const inLocal = localStorage.getItem(`theme`);

if (inLocal === `dark-theme`) {
  ref.body.classList.add(`dark-theme`);
  ref.themeSwitch.checked = true;
}
