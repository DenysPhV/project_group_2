import './sass/main.scss';
import './js/pagination';

// ============== Импорт на pnotify ===================
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import { error } from '@pnotify/core';

// ================= debounce ==========================
// const debounce = require('lodash.debounce');

import ApiService from './js/apiService';

const apiService = new ApiService();

import homeBtnRenderPage from './js/homeBtnRenderPage';

import cardsTemplate from './templates/cards.hbs';
import refs from './js/refs.js'
import cardsMarkUp from './js/cards-mark-up.js'


