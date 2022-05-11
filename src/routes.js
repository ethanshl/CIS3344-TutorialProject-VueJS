import showArticles from './components/showArticles.vue';
import addArticle from './components/addArticle.vue';
import singleArticle from './components/singleArticle.vue';
import baseball from'./components/baseball.vue';
import basketball from'./components/basketball.vue';
import football from'./components/football.vue';
import hockey from'./components/hockey.vue';




export default[
  {path:'/',component:showArticles},
  {path:'/add', component:addArticle},
  {path:'/baseball', component:baseball},
  {path:'/basketball', component:basketball},
  {path:'/football', component:football},
  {path:'/hockey', component:hockey},
  {path:'/article/:id', component:singleArticle},
  
]
