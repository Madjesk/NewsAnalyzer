export default class DataStorage {
    constructor(showNews, haveResults, input) {
        this.showNews = showNews;
        this.haveResults = haveResults;
        this.input = input;
    }
    //Записываем значение инпута и результаты с api в localstorage
    writingToLocalStorage(res, input) {
        localStorage.setItem('res', JSON.stringify(res));
        localStorage.setItem('inputValue', input.value);
    }

    //Очищаем locastorage
    clearLocalStorage() {
        localStorage.removeItem('res');
        localStorage.removeItem('inputValue');
    }

    //Проверяем содержимое local storage
    checkLocalStorageValue() {
        if (localStorage.getItem('inputValue') || localStorage.getItem('res')) {
            const res = JSON.parse(localStorage.getItem('res'));
            this.input.value = localStorage.getItem('inputValue');
            this.haveResults();
            this.showNews(res);
        }
    }

}