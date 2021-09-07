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

// оставил на потом надо разобраться
// // при открытии модалки
// // find tag HTML and save him
// let html = document.documentElement;
// // save current scroll
// let scrollPosition = window.pageXOffset;
// // установим свойство top у html равное прокрутке
// html.style.top = -scrollPosition + 'px';
// html.classList.add('footer-modal__opened');

// // при закрытии модалки
// html.classList.remove('footer-modal__opened');
// // прокручиваем туда где оно было
// window.scrollTo(0, scrollPosition);
// html.style.top = '';

// class FooterModal {
//   constructor(props) {
//     const defaultConfig = {
//       linkAttributeName: 'data-footerModal',
//       // ... здесь остальные свойства
//     };
//     this.config = Object.assign(defaultConfig, props);
//     // сразу вызываем метод инициализации
//     this.init();
//   }
//   static _shadow = false;

//   init() {
//     this.isOpened = false; // открыто ли окно
//     this.openedWindow = false; //ссылка на открытый .footer-modal
//     this._modalBlock = false; //ссылка на открытый .footer-modal__window
//     this.starter = false; //ссылка на элемент "открыватель" текущего окна
//     // (он нужен для возвращения фокуса на него)
//     this._nextWindows = false; //ссылка на .hystmodal который нужно открыть
//     this._scrollPOsition = 0; //текущая прокрутка (см. выше)

//     if (!FooterModal._shadow) {
//       FooterModal._shadow = document.createElement('div');
//       FooterModal._shadow.classList.add('footer-modal___shadow');
//       document.body.appendChild(FooterModal._shadow);
//     }

//     //Запускаем метод для обработки событий см. ниже.
//     this.eventsFeeler();
//   }

//   eventsFeeler() {
//     /**
//      * Нужно обработать открытие окон по клику на элементы с data-атрибутом
//      * который мы установили в конфигурации - this.config.linkAttributeName
//      *
//      * Здесь мы используем делегирование события клика, чтобы обойтись одним
//      * лишь обработчиком события на элементе html
//      *
//      */
//     document.addEventListener(
//       'click',
//       function (e) {
//         const clickedLink = e.target.closest('[' + this.config.linkAttributeName + ']');

//         if (clickedLink) {
//           e.preventDefault();
//           this.starter = clickedLink;
//           let targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
//           this._nextWindows = document.querySelector(targetSelector);
//           this.open();
//           return;
//         }

//         if (e.target.closest('[data-footerModalClose]')) {
//           this.close();
//           return;
//         }
//       }.bind(this),
//     );
//   }

//   open(selector) {
//     this.openedWindow = this._nextWindows;
//     this._modalBlock = this.openedWindow.querySelector('.footer-modal__window');
//     /** Вызываем метод управления скроллом
//      * он будет блокировать/разблокировать
//      * страницу в зависимости от свойства this.isOpened
//      */

//     this._bodyScrollControl();
//     FooterModal._shadow.classList.add('.footer-modal__shadow--show');
//     this.openedWindow.classList.add('.footer-modal--active');
//     this.openedWindow.setAttribute('aria-hidden', 'false');
//     this.focusControl(); //вызываем метод перевода фокуса (см. ниже)
//     this.isOpened = true;
//   }

//   close() {
//     /**
//      * Метод закрытия текущего окна. Код упрощён
//      * подробнее в статье далее.
//      */
//     if (!this.isOpened) {
//       return;
//     }
//     this.openedWindow.classList.remove('footer-modal--active');
//     FooterModal._shadow.classList.remove('footer-modal__shadow--show');
//     this.openedWindow.setAttribute('aria-hidden', 'true');
//     //возвращаем фокус на элемент которым открылось окно
//     this.focusControl();

//     //возвращаем скролл
//     this._bodyScrollControl();
//     this.isOpened = false;
//   }

//   _bodyScrollControl() {
//     let html = document.documentElement;
//     if (this.isOpened === true) {
//       //разблокировка страницы
//       html.classList.remove('footer-modal__opened');
//       html.style.marginRight = '';
//       window.scrollTo(0, this._scrollPOsition);
//       html.style.top = '';
//       return;
//     }
//     //блокировка страницы
//     this._scrollPOsition = window.pageYOffset;
//     html.style.top = -this._scrollPOsition + 'px';
//     html.classList.add('footer-modal__opened');
//   }
// }

// const myModal = new FooterModal({
//   linkAttributeName: 'data-footerModal',
// });
