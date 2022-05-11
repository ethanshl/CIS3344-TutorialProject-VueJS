<template>

  <div id="add-comment">
    <form @submit.prevent="postComment">
      <p>
        <label for="review">Review:</label>
        <textarea name="text" id="text" v-model.lazy="comments.content" placeholder="Enter your comment here"></textarea>
        </p>
        <p>
          <button @click.prevent="getValue()">Submit</button>
        </p>
        </form>

      <div id="comments-section">
      <ul style="list-style-type:none;">
        <li v-for="comment in comments">{{comment}}
          <hr />
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: []
      }
    },
    methods: {
      getValue() {
        this.comments.push(document.getElementById('text').value);
      },
      postValue() {
        var div = document.getElementById('comments-section');
        div.innerHTML += comments;
      }
    }
  }
</script>

<style>


textarea{
  height: 100px;
  white-space: pre-wrap;
  width: 100%;
 }

  #comments-section{
    height: 300px;
    width:800px;


  }
</style>
