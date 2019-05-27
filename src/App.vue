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

<style lang="scss">

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
ul, li{

  padding: 0;
  margin: 0
}
button{
  cursor: pointer;
  background: transparent;
  border:none;
  outline: none;
}
button:focus, button:active{outline: none;}

.tooltip{
  position: absolute;
  width: 132px;
  height: 29px;
  border-radius: 5px;
  background-color: purple;
  top: 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  left: -45px;
  z-index: 100;
}
.tooltip:hover{
  display: block;
}
 .tooltip ul{}
 .tooltip ul li{
   display: inline-block;
 }
 .tooltip ul li button{
  width: auto;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
  padding: 3px;
}
 .tooltip button .material-icons{  font-size:20px}
.tooltip button:hover{  opacity: 1}



.hvr-bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}


.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
