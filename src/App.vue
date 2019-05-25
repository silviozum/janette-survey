<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color:#673AB7;
  color: #fff;
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
button{
  cursor: pointer;
}
</style>
