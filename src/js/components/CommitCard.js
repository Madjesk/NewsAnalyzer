import getCompleteDate from '../utils/utils';

export default class CommitCard {
    constructor(element) {
        this.slide = this._createCommitCard(element);
    }

    //Создаём карточку коммита
    _createCommitCard(element) {

        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const commit = document.createElement('div');
        commit.classList.add('commits-card');

        const commitDate = document.createElement('p');
        commitDate.classList.add('commits-card__date');
        commitDate.textContent = getCompleteDate(element.commit.committer.date);

        const commitInfo = document.createElement('div');
        commitInfo.classList.add('commits-card__info');

        const commitPhoto = document.createElement('img');
        commitPhoto.classList.add('commits-card__photo');
        commitPhoto.setAttribute('src', element.committer.avatar_url);

        const commitUser = document.createElement('div');
        commitUser.classList.add('commits-card__user');

        const commitName = document.createElement('p');
        commitName.classList.add('commits-card__name');
        commitName.textContent = element.committer.login;

        const commitMail = document.createElement('p');
        commitMail.classList.add('commits-card__mail');
        commitMail.textContent = element.commit.committer.email;

        const commitText = document.createElement('p');
        commitText.classList.add('commits-card__text');
        commitText.textContent = element.commit.message;

        slide.appendChild(commit);

        commit.appendChild(commitDate);
        commit.appendChild(commitInfo);
        commit.appendChild(commitText);

        commitInfo.appendChild(commitPhoto);
        commitInfo.appendChild(commitUser);

        commitUser.appendChild(commitName);
        commitUser.appendChild(commitMail);

        return slide;
    }
}