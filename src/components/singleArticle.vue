<template>
  <div id="single-article">
    <h1>{{article.title}}</h1>
    <article>{{article.content}}</article>
    <hr />
    <h3>Comment Section: </h3>
    <addComment></addComment>
    <hr />
  </div>
</template>

<script>
  import addComment from './addComment.vue'

  export default {

    components: {
      addComment
    },

    data(){
      return{
        id:this.$route.params.id,
        article: {}
      }
    },
    created(){
      this.$http.get('https://test1-7d650.firebaseio.com/posts/'+ this.id +'.json').then(function(data){
        return data.json();
      }).then(function(data){
        this.article = data;
      })
    }
    
  }
</script>

<style>
  #single-article{
    max-width:960px;
    margin:0 auto;
  }
</style>
