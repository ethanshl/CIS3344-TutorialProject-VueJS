<template>
	<div>
    <app-header></app-header>
		<router-view></router-view>

	</div>
</template>

<script>
  import addArticle from'./components/addArticle.vue';
  import showArticles from'./components/showArticles.vue';
  import header from'./components/header.vue';
  import singleArticle from'./components/singleArticle.vue';
  import baseball from'./components/baseball.vue';
  import basketball from'./components/basketball.vue';
  import football from './components/football.vue';
  import hockey from './components/hockey.vue';
  import addComment from './components/addComment.vue'
 

export default{
	components:{
		'add-article':addArticle,
    'show-articles':showArticles,
    'app-header':header,
    'single-article':singleArticle,
    'baseball-articles':baseball,
    'basketball-articles':basketball,
    'football-articles':football,
    'hockey-articles': hockey,
    'add-comment': addComment
	},
	data(){
		return{

		}
  },
	methods:{

	}
}

</script>

<style>
body {
	margin:0;
	font-family:'Nunito SemiBold';
}
</style>
