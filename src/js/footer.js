const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Developer',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Developer',
  },
  {
    name: 'DmytroMS',
    position: 'Developer',
  },
  {
    name: 'Iliya Lunev',
    position: 'Scrum master',
  },
  {
    name: 'KMyroslav',
    position: 'Developer',
  },
  {
    name: 'Masha Shytykova',
    position: 'Developer',
  },
  {
    name: 'Oleksandr Boiko',
    position: 'Developer',
  },
  {
    name: 'Ruslan Kuzma',
    position: 'Developer',
  },
  {
    name: 'Denys Filichkin',
    position: 'Team lead',
  },
];

const itemFooterDev = document.querySelector('.footer__page-list');
arrFooterDev.map(({ name, position }, index) => {
  itemFooterDev.insertAdjacentHTML(
    'afterbegin',
    `<li class="footer__page-item">
     
     <h3>${name}</h3>
     <p>${position}</p>
     </li>
  `,
  );
});

// console.log(itemFooterDev);

(() => {
  const refs = {
    openFooterBtn: document.querySelector('[data-footer-button]'),
    closeFooterBtn: document.querySelector('[data-footer-close]'),
    footer: document.querySelector('[data-footer]'),
  };

  // закрыть по клику на ескейп
  function pressKey(event) {
    if (event.key === 'Escape') {
      refs.footer.classList.remove('is-hidden');
    }
  }

  function toggleModal() {
    refs.footer.classList.toggle('is-hidden');
  }

  refs.openFooterBtn.addEventListener('click', toggleModal);
  refs.closeFooterBtn.addEventListener('click', toggleModal);
  refs.closeFooterBtn.removeEventListener('keydown', pressKey);
})();
