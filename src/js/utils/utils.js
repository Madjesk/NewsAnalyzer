import {
  resultsContainer,
  preloader,
  error,
  empty,
  resultsHeader,
  cardsContainer,
  buttonMore
} from '../constants/const'

//Переводим дату из формата ISO 8601 Extended в день месяц год
export default function getCompleteDate(date) {
  const data = new Date(date).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return data
}

//Дата сегодня 
export function getTodayDate() {
  return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
}

//Дата 6 дней назад
export function getWeekAgoDate() {
  const miliSecInSixDays = 518400000;
  const weekAgo = new Date(new Date() - miliSecInSixDays);
  const currentDate = weekAgo.toJSON().slice(0, 10).replace(/-/g, '/');
  return currentDate;
}

//Получаем дату (число)
export function getNumberDate(date) {
  const data = new Date(date).toLocaleString('ru', {
    day: 'numeric'
  });
  return data
}

//Получаем массив со днями недели
export function getWeekDay(i) {
  const days = [' пн', ' вт', ' ср', ' чт', ' пт', ' сб', ' вс'];
  const daysSorted = [];
  const DAYS_IN_WEEK = 7;
  const today = new Date();

  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    let newDate = new Date(today.setDate(today.getDate() - 1));
    daysSorted.unshift(days[newDate.getDay()]);
  }
  return daysSorted[i];
}

//Добавляем последние 7 дней в массив
export function addWeekDatesToArray(i) {
  let now = new Date();
  let time = now.getTime();
  let weekDates = [];
  now = new Date(time - (time % 86400000));

  for (let i = 0; i < 7; i++, now.setDate(now.getDate() - 1)) {
    weekDates.unshift(now.getDate());
  }
  return weekDates[i]
}


//Показываем прелоадер
export function showPreloader() {
  preloader.classList.remove('hide');
  cardsContainer.classList.add('hide');
  resultsHeader.classList.add('hide');
  buttonMore.classList.add('hide');
  error.classList.add('hide');
  empty.classList.add('hide');
}

//Если нет релзультатов
export function noResults() {
  preloader.classList.add('hide');
  empty.classList.remove('hide');
  resultsContainer.classList.add('hide');
  cardsContainer.classList.add('hide');
}

//Есть результаты
export function haveResults() {
  resultsContainer.classList.remove('hide');
  preloader.classList.add('hide');
  empty.classList.add('hide');
  error.classList.add('hide');
  cardsContainer.classList.remove('hide');
  resultsHeader.classList.remove('hide');
  buttonMore.classList.remove('hide');
}

//Показываем ошибку
export function showError() {
  preloader.classList.add('hide');
  resultsContainer.classList.add('hide');
  error.classList.remove('hide');
  cardsContainer.classList.add('hide');
}