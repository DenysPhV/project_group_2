// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME
console.log('Run myScript');

import ApiService from './apiService';
const apiService = new ApiService();

apiService.fetchTrending().then(data => {
  console.log(data);
  data.map(item => {
    console.log(item.title);
  });
});

// export default function test() {
//   console.log('Run myScript from test function');
// }
