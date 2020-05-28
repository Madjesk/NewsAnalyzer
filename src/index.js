import './style/index.css';
import {
    NEWS_API_KEY,
    form,
    input,
    cardsContainer,
    buttonMore,
    MAX_CARDS_IN_ROW,
    buttonForm,
    errorForm,
    defaultPhoto,
    NEWS_URL
} from './js/constants/const';
import NewsApi from './js/modules/NewsApi';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import SearchInput from './js/components/SearchInput';
import DataStorage from './js/modules/DataStorage';
import {
    getTodayDate,
    getWeekAgoDate,
    showPreloader,
    noResults,
    haveResults,
    showError
} from './js/utils/utils.js'

const searchInput = new SearchInput(form, input, buttonForm, errorForm, receivedRequest);
const dataStorage = new DataStorage(showNews, haveResults, input);
const cardList = new NewsCardList(cardsContainer, buttonMore, MAX_CARDS_IN_ROW);

cardList.buttonAddEventListener();
searchInput.formAddEventListener(); 
dataStorage.checkLocalStorageValue();

//отрисовываем карточки новостей и добавляем в массив
function showNews(res) {
    res.articles.forEach(article => {
        const card = new NewsCard(article, defaultPhoto);
        cardList.arrayWithAllCards.push(card);
    });
    cardList.renderNews();
}

//Получили запрос на поиск новостей
function receivedRequest() {
    event.preventDefault();
    if (searchInput.validate(input.value)) {
        cardList.HideOrShowButtonMore(false); 
        searchInput.disactivateForm(); 
        cardList.clearContainer(); 
        showPreloader();
        const newsApi = new NewsApi(NEWS_URL, input.value, getTodayDate, getWeekAgoDate, NEWS_API_KEY);
        newsApi.getNews()
            .then((res) => {
                if (res.totalResults == 0) {
                    noResults();
                } else {
                    // console.log(res);
                    dataStorage.clearLocalStorage();
                    dataStorage.writingToLocalStorage(res, input);
                    haveResults();
                    showNews(res);
                }
            })
            .catch((err) => {
                showError()
                console.log(err);
            })
            .finally(() => {
                searchInput.activateForm();
            })
    }
}