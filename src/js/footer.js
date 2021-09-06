const arrFooterDev = [
  {
    name: 'Andrii Lypovetskyi',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0209L32VGE-4d63a7b43c4f-512',
  },
  {
    name: 'Aleksandr Bondarenko',
    position: 'Developer',
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U020RDMUW20-57b717892067-512',
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
    preview: 'https://ca.slack-edge.com/T01UW5D5RDJ-U0210K7SHR7-e237547f4c4f-512',
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
    <img class="footer__page-images" src="${preview}" alt="${name}" >
     <h3>${name}</h3>
     <p>${position}</p>
     </li>
  `,
  );
});
