// массив объектов команды
const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0209L32VGE-e6f9cf6dd225-512',
    linkedin: '#',
    github: 'https://github.com/AndrL2311',
  },
  {
    name: 'Ruslan Kuzma',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01E40QL2LD-U01KVFMHD5M-d78aac37dda3-512',
    linkedin: 'https://www.linkedin.com/in/ruslan-kuzma-60901817a/',
    github: 'https://github.com/ruslan3486',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020RDMUW20-57b717892067-512',
    linkedin: 'https://www.linkedin.com/in/aleksandr-bondarenko-salute/',
    github: 'https://github.com/Aleksandr-Bondarenko',
  },
  {
    name: 'Dmytro Salii',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020ALA32Q5-442b8c87d6d3-512',
    linkedin: 'https://www.linkedin.com/in/dmytro-salii/',
    github: 'https://github.com/DmytroMS',
  },

  {
    name: 'Myroslav Kuhtaruk',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020L0YFVPE-b8d72596946f-512',
    linkedin: '#',
    github: 'https://github.com/KMyroslav',
  },
  {
    name: 'Masha Shytykova',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020SD6GU1F-5b19e948dcad-512',
    linkedin: 'https://www.linkedin.com/in/masha-shytykova-a28b8b15b/',
    github: 'https://github.com/Masha-Shytykova',
  },
  {
    name: 'Oleksandr Boiko',
    position: 'Full-Stack developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0210K7SHR7-e237547f4c4f-512',
    linkedin: '#',
    github: 'https://github.com/OleksandrB1',
  },

  {
    name: 'Iliya Lunev',
    position: 'Scrum master',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020KTB155J-6d17af4c8085-512',
    linkedin: 'https://www.linkedin.com/in/iliya-lunov-658267120/',
    github: 'https://github.com/Illiya-Lunev',
  },
  {
    name: 'Denys Filichkin',
    position: 'Team lead',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020BQ51HE1-5e9ad54fc99b-512',
    linkedin: 'https://www.linkedin.com/in/denys-philichkin-30483390/',
    github: 'https://github.com/DenysPhV',
  },
];

const itemFooterDev = document.querySelector('.footer-modal__list');
arrFooterDev.map(({ name, position, preview, linkedin, github }) => {
  itemFooterDev.insertAdjacentHTML(
    'afterbegin',
    `<li class="footer-modal__item">
    
    <img class="footer-modal__images" src="${preview}" alt="${name}">
    <div class="footer-modal__desc">
     <h3>${name}</h3>
     <p>${position}</p>

      <ul class="footer-modal__list-link list">
      <li class="footer-modal__item-link">
         <a href="${github}" class="footer-modal__icon-link">
         <ion-icon name="logo-github" size="large"></ion-icon>
      </a>
      </li>
      <li class="footer-modal__item-link">
        <a href="${linkedin}" class="footer-modal__icon-link">
        <ion-icon name="logo-linkedin" size="large"></ion-icon>
      </a>
      </li> 
      </ul>
     </div>
     </li>
  `,
  );
});

//IIFE - эта функция быстрого запуска
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // закрытие по эскейпу
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
      refs.body.classList.remove('footer-modal-open');
    }
  });

  // заменна классов и закрытия модалки
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('footer-modal-open');
  }
})();

// закрытие по клику в пусто (не в теле IIFE сразу выполняется)
const body = document.querySelector('body');
const modal = document.querySelector('[data-modal]');
modal.addEventListener('click', clickOut);

function clickOut(e) {
  if (e.target.localName !== 'img') {
    modal.classList.add('is-hidden');
    body.classList.remove('footer-modal-open');
  }
}
