import getCompleteDate from '../utils/utils';

export default class NewsCard {
    constructor(article, defaultPhoto) {
        this.defaultPhoto = defaultPhoto;
        this.card = this._createCard(article);
    }

    //Создаём карточку новости 
    _createCard(article) {

        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.classList.add('card__link');
        cardLink.setAttribute('href', article.url);
        cardLink.setAttribute("target", "_blank");

        const cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.setAttribute('src', article.urlToImage);

        //Иногда вместо изображения получаем null, в этом случаем присваиваем карточке defaultPhoto
        if (article.urlToImage === null) {
            cardImage.setAttribute('src', this.defaultPhoto);
        }

        const cardDate = document.createElement('p');
        cardDate.classList.add('card__date');
        cardDate.textContent = getCompleteDate(article.publishedAt);

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = article.title;

        const cardSubtitle = document.createElement('p');
        cardSubtitle.classList.add('card__subtitle');
        cardSubtitle.textContent = article.description;

        const cardOrigin = document.createElement('p');
        cardOrigin.classList.add('card__origin');
        cardOrigin.textContent = article.source.name;

        card.appendChild(cardLink);

        cardLink.appendChild(cardImage);
        cardLink.appendChild(cardDate);
        cardLink.appendChild(cardTitle);
        cardLink.appendChild(cardSubtitle);
        cardLink.appendChild(cardOrigin);

        return card;
    }
}