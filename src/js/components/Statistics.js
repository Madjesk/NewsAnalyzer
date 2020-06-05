export default class Statistics {
    constructor
        (request, requestsPerWeek, headlinesMentions, mounth, datesColumn, row,
        getNumberDate, daysColumn, daysOfWeek, getWeekDay, addWeekDatesToArray, progressColumn) {
        this.request = request;
        this.requestsPerWeek = requestsPerWeek;
        this.headlinesMentions = headlinesMentions;
        this.mounth = mounth;
        this.datesColumn = datesColumn;
        this.row = row;
        this.getNumberDate = getNumberDate;
        this.daysColumn = daysColumn;
        this.daysOfWeek = daysOfWeek;
        this.totalInTitle = 0;
        this.arrayWithDates = [];
        this.arrayWithSortDates = [];
        this.getWeekDay = getWeekDay;
        this.addWeekDatesToArray = addWeekDatesToArray;
        this.progressColumn = progressColumn;
    }

    //Отрисовываем запрос, число новостей и количество упоминаний в заголовках
    settingInformation() {
        this.request.textContent = '"' + localStorage.getItem('inputValue') + '"'; //запрос
        const result = JSON.parse(localStorage.getItem('res'));
        this.requestsPerWeek.textContent = result.totalResults; //всего новостей
        this.headlinesMentions.textContent = this._getMentionsInTitles(); //всего упоминаний
    }

    //В таблице отрисовываем текущий месяц
    settingMounth() {
        this.mounth.textContent = 'Дата (' + new Date().toLocaleString('ru', {
            month: 'long'
        }) + ')';
    }

    //Получаем количество упоминаний в заголовках
    _getMentionsInTitles() {
        const valueReqest = localStorage.getItem('inputValue')
        const results = JSON.parse(localStorage.getItem('res'));
        results.articles.forEach(item => {
            if (item.title.includes(valueReqest)) {
                this.totalInTitle = this.totalInTitle + 1;
            }
        });
        return this.totalInTitle
    }

    //Получаем сколько было всего упоминаний
    _getTotalMentions() {
        const valueReqest = localStorage.getItem('inputValue');
        const results = JSON.parse(localStorage.getItem('res'));
        let totalDescripton = 0;
        let totalTitle = 0;
        results.articles.forEach(item => {
            //чтобы не было ошибки проверяем, что статья не null
            if (item.description !== null) {
                if (item.description.includes(valueReqest)) {
                    totalDescripton = totalDescripton + 1;
                }
            }
            if (item.title.includes(valueReqest)) {
                totalTitle = totalTitle + 1;
            }
        });
        return totalTitle + totalDescripton;
    }

    //Получаем все даты, которые пришли с api, переводим их и добавляем в массив
    addAllDatesInArray() {
        const results = JSON.parse(localStorage.getItem('res'));
        results.articles.forEach(item => {
            const rightDate = this.getNumberDate(item.publishedAt) //Переводим дату в вид "день месяц год"
            this.arrayWithDates.push(rightDate);
        });
        this._sortDates(this.arrayWithDates);
    }

    //Создаём массив, в котором получаем кол-во новостей за каждый день недели. Массив начинается с самого позднего дня.
    _sortDates() {
        this.arrayWithDates.sort();
        let current = null;
        let counter = 0;
        for (var i = 0; i < this.arrayWithDates.length; i++) {
            if (this.arrayWithDates[i] != current) {
                if (counter > 0) {
                    this.arrayWithSortDates.push(counter);
                }
                current = this.arrayWithDates[i];
                counter = 1;
            } else {
                counter++;
            }
        }
        if (counter > 0) {
            this.arrayWithSortDates.push(counter);
        }
    }

    //Добавляем рядам заливку в % и указываем упоминания в %
    changeRows() {
        const total = this._getTotalMentions();
        for (let i = 0; i < this.arrayWithSortDates.length; i++) {
            const persent = ((this.arrayWithSortDates[i] * total) / 100).toFixed();
            this.progressColumn.children[i].textContent = persent;
            this.progressColumn.children[i].setAttribute('style', `width: ${persent}%`)
        }
    }

    //Добавляем информацию в колонны(число, день недели)
    аddDatesToColumn() {
        for (let i = 0; i <= 6; i++) {
            this.datesColumn.children[i].textContent = this.addWeekDatesToArray(i);
            this.daysColumn.children[i].textContent = this.getWeekDay(i);
        }
    }
}