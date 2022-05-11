<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/baseball" exact>Baseball</router-link></li>
      <li><router-link to="/basketball" exact>Basketball</router-link></li>
      <li><router-link to="/football" exact>Football</router-link></li>
      <li><router-link to="/hockey" exact>Ice hockey</router-link></li>

      <li><router-link to="/add" exact>Add a New Article</router-link></li>


    </ul>
  </nav>
</template>

<script>
  export default{
    data(){
      return{



		}
    },
  }
</script>

<style scoped>
  ul{
    list-style-type:none;

    margin:0;
  }
  li{
    display:inline-block;
    margin:0 10px;
  }
  a{
    color:#fff;
    text-decoration: none;
    padding:6px 8px;
    border-radius: 5px;
  }
  nav{
    background:#444;
    padding:14px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: #eee;
    color:#444;
  }
  .rightSide{
    margin-left: 700px;
  }
</style>
