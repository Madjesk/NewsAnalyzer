export default class NewsCardList {
  constructor(cardsContainer, buttonMore, MAX_CARDS_IN_ROW) {
    this.cardsContainer = cardsContainer;
    this.arrayWithAllCards = [];
    this.initialNumber = 0;
    this.buttonMore = buttonMore;
    this.MAX_CARDS_IN_ROW = MAX_CARDS_IN_ROW;
  }

  //Прячем или показываем кнопку "Показать ещё"
  HideOrShowButtonMore(isHide = true) {
    if (isHide == true) {
      this.buttonMore.classList.add('hide');
    } else {
      this.buttonMore.classList.remove('hide');
    }
  }

  //Отрисовываем готовые карточки на странице, по 3 за раз
  renderNews() {
    for (let i = this.initialNumber; i < this.initialNumber + this.MAX_CARDS_IN_ROW; i++) {
      this.cardsContainer.appendChild(this.arrayWithAllCards[i].card);
      //Когда закончились карточки удаляем кнопку "Показать ещё"
      if (this.arrayWithAllCards.length - 1 == i) {
        this.HideOrShowButtonMore();
        break;
      }
    }
  }

  //Увеличиваем начальное число на 3 и отправляем отрисовывать
  _increaseInitialNumber() {
    this.initialNumber = this.initialNumber + this.MAX_CARDS_IN_ROW;
    this.renderNews();
  }

  //Очищаем контейнер с новостями и массив со всем карточками
  clearContainer() {
    this.cardsContainer.textContent = '';
    this.arrayWithAllCards = [];
  }

  //Вешаем слушатель на кнопку "Показать ещё"
  buttonAddEventListener() {
    this.buttonMore.addEventListener('click', this._increaseInitialNumber.bind(this))
  }
}