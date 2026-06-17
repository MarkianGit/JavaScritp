// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM




const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
const currentSession = new Date().toLocaleString();
sessionsList.push(currentSession);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
