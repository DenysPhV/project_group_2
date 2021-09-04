import { footerBtn } from './refs';
// const
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

console.log(itemFooterDev);
