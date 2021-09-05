const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0209L32VGE-ecec0c090036-512',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020RDMUW20-fdbfb1884f9b-512',
  },
  {
    name: 'Dmytro S.',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020ALA32Q5-442b8c87d6d3-512',
  },
  {
    name: 'Iliya Lunev',
    position: 'Scrum master',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020KTB155J-6d17af4c8085-512',
  },
  {
    name: 'Myroslav Kuhtaruk',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020L0YFVPE-b8d72596946f-512',
  },
  {
    name: 'Masha Shytykova',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020SD6GU1F-5b19e948dcad-512',
  },
  {
    name: 'Oleksandr Boiko',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0210K7SHR7-g6bd5d135bc9-512',
  },
  {
    name: 'Ruslan Kuzma',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01E40QL2LD-U01KVFMHD5M-d78aac37dda3-512',
  },
  {
    name: 'Denys Filichkin',
    position: 'Team lead',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020BQ51HE1-5e9ad54fc99b-512',
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
