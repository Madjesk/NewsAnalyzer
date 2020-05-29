export default class GitHubApi {
    constructor(urlGit) {
        this.urlGit = urlGit;
    }

    //Получаем коммиты
    getCommits() {
        return fetch(`${this.urlGit}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

}