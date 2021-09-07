const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0209L32VGE-4d63a7b43c4f-512',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020RDMUW20-57b717892067-512',
  },
  {
    name: 'Dmytro Salii',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020ALA32Q5-442b8c87d6d3-512',
  },
  {
    name: 'Iliya Lunev',
    position: 'Scrum master',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020KTB155J-6d17af4c8085-512',
  },
  {
    name: 'Myroslav Kuhtaruk',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020L0YFVPE-b8d72596946f-512',
  },
  {
    name: 'Masha Shytykova',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020SD6GU1F-5b19e948dcad-512',
  },
  {
    name: 'Oleksandr Boiko',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0210K7SHR7-e237547f4c4f-512',
  },
  {
    name: 'Ruslan Kuzma',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01E40QL2LD-U01KVFMHD5M-d78aac37dda3-512',
  },
  {
    name: 'Denys Filichkin',
    position: 'Team lead',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020BQ51HE1-5e9ad54fc99b-512',
  },
];

const itemFooterDev = document.querySelector('.footer-modal__list');
arrFooterDev.map(({ name, position, preview }, index) => {
  itemFooterDev.insertAdjacentHTML(
    'afterbegin',
    `<li class="footer-modal__item">
    
    <img class="footer-modal__images" src="${preview}" alt="${name}" >
    <div class="footer-modal__desc">
     <h3>${name}</h3>
     <p>${position}</p>
     </div>
     </li>
  `,
  );
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
