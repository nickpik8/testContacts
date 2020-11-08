<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}
input{
    height: 2rem;
}
.big-title{
    margin-right: 1rem;
    font-weight: 700;
    text-transform: uppercase;
}
a{
  color: #008cff;
  text-decoration: none;
}
</style>
