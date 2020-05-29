export default class CommitCardList {
    constructor(commitsContainer) {
        this.arrayWithAllCommits = [];
        this.commitsContainer = commitsContainer;
    }

    //Отрисовываем готовые карточки на странице
    renderCommits() {
        for (let i = 0; i < this.arrayWithAllCommits.length; i++) {
            this.commitsContainer.appendChild(this.arrayWithAllCommits[i].slide);
        }
    }

}