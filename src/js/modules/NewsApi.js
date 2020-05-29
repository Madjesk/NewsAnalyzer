export default class NewsApi {
    constructor(url, value, getTodayDate, getWeekAgoDate, apiKey) {
        this.url = url;
        this.value = value;
        this.getTodayDate = getTodayDate;
        this.getWeekAgoDate = getWeekAgoDate;
        this.apiKey = apiKey;
    }
    //Получаем новости
    getNews() {
        return fetch(`${this.url}q=${this.value}&from=${this.getTodayDate()}&to=${this.getWeekAgoDate()}&pageSize=100&sortBy=popularity&apiKey=${this.apiKey}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

}