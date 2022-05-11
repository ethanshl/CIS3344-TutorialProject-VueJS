<template>
	<div id="basketball-articles">
    <h1>Basketball</h1>
    <input type="text" v-model="search" placeholder="search articles"/>
    <div v-for="article in filteredArticles"class="single-article">

      <router-link v-bind:to = "'/article/'+ article.id"><h2>{{article.title}}</h2></router-link>
      <article>{{article.content | snippet}}</article>
    </div>





	</div>
</template>

<script>

export default{

	data(){
		return{
      articles:[],
      search:''

		}
    },
	methods:{

	},
  created(){
    //then() => fire after the .get() completed
    this.$http.get('https://test1-7d650.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var articlesArray=[];
      for(let key in data){
        //console.log(data[key]);
        data[key].id=key;
        if(data[key].category == 'Basketball'){
            articlesArray.push(data[key]);
            }
        }

      //console.log(data))
      this.articles = articlesArray;
    })
  },
  computed:{
    filteredArticles:function(){
      return this.articles.filter((article) => {
        return article.title.match(this.search);
      })
    }
  },
  filters:{
    snippet: function(value){
      return value.slice(0,200) + "...";
      }

  }
}

</script>

<style>
#basketball-articles{
  max-width: 800px;
  margin: 0 auto;
}

.single-article{
  padding:20px;
  margin:20px 0;
  box-sizing: border-box;
  background: #eee;
  border-radius: 5px;
}
</style>
