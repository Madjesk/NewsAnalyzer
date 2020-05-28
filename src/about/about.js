import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';
import "../style/about.css";
import {
  urlGit,
  commitsContainer,
  options
} from "../js/constants/const"
import GithubApi from '../js/modules/GithubApi';
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList'

const gitApi = new GithubApi(urlGit);
const commitCardList = new CommitCardList(commitsContainer);

//Получаем коммиты
gitApi.getCommits()
  .then((res) => {
    showCommits(res);
  })
  .catch((err) => {
    console.log(err);
  })

//Отправляем коммиты на отрисовку и записываем их в массив
function showCommits(res) {
  res.forEach(commit => {
    const commitCard = new CommitCard(commit);
    commitCardList.arrayWithAllCommits.push(commitCard);
  });
  commitCardList.renderCommits();
  const swiper = new Swiper('.swiper-container', options);
}