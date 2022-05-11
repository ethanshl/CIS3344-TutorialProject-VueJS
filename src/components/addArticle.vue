<template>
	<div id="add-article">
		<h2>Add a New Article Post</h2>
		<form v-if="!submitted">
			<label>Article Title:</label>
			<input type="text" v-model.lazy="article.title" required/>
			<label>Article Content:</label>
			<textarea v-model.lazy="article.content"></textarea>
      <label>Select category:</label>
      <select v-model="article.category">
        <option v-for="category in categories">{{category}}</option>
      </select>
      <button v-on:click.prevent="post">Add Article</button>
		</form>
    <div v-if="submitted">
      <h3>Submit successfully!</h3>
    </div>
		<div id="preview">
			<h3>Preview Article</h3>
			<p>Article title: {{article.title}}</p>
			<p>Article content: </p>
      <p>{{article.content}}</p>
      <p>Article Category: {{article.category}}</p>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
      article:{
        title:"",
        content:"",
        category:""
      },
      categories:['Baseball','Basketball','Football','Hockey'],
      submitted:false,
      }
    },
	methods:{
    post:function(){
      this.$http.post('https://test1-7d650.firebaseio.com/posts.json',this.article).then(function(data){
        console.log(data);
        this.submitted=true;
      });
    }

	}
}

</script>

<style>
#add-article *{
	box-sizing:border-box;
}

#add-article{
	margin:20px auto;
  max-width: 500px;
}

label{
	display:block;
}

label{
	display: block;
	margin:20px 0 10px;
}

input[type="text"],textarea{
	display:block;
	width:100%;
	padding:8px;

}
textarea{
    height: 300px;
    white-space: pre-wrap;
}

#preview{
	padding:10px 20px;
	border:1px dotted #ccc;
	margin:30px 0
}

h3{
	margin-top: 10px;
}

#checkboxes input{
  display:inline-block;
  margin-right:10px;
}

#checkboxes label{
  display:inline-block;
}

</style>
