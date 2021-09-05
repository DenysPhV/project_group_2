const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Developer',
    preview: '../src/images/pictures/thor.jpg',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'DmytroMS',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'Iliya Lunev',
    position: 'Scrum master',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'KMyroslav',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'Masha Shytykova',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'Oleksandr Boiko',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'Ruslan Kuzma',
    position: 'Developer',
    preview: './images/pictures/thor.jpg',
  },
  {
    name: 'Denys Filichkin',
    position: 'Team lead',
    preview: './images/pictures/thor.jpg',
  },
];

const itemFooterDev = document.querySelector('.footer__page-list');
arrFooterDev.map(({ name, position, preview }, index) => {
  itemFooterDev.insertAdjacentHTML(
    'afterbegin',
    `<li class="footer__page-item">
    <img class="footer__page-images" src="${preview}" alt="${name}" width="200px">
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

  refs.openFooterBtn.addEventListener('click', toggleModal);
  refs.closeFooterBtn.addEventListener('click', toggleModal);

  // закрыть по клику на ескейп
  // function pressKey(event) {
  //   if (event.key === 'Escape') {
  //     refs.footer.classList.remove('is-hidden');
  //   }
  // }

  function toggleModal() {
    refs.footer.classList.toggle('is-hidden');
  }
})();
