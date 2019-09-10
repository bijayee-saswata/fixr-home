<template>
  <div id="app">
    <loader v-if="loading" />
    <transition name="moveInUp" v-else> <router-view/>  </transition>
  </div>
</template>

<script>

import loader from './components/loader'
export default {
  name: 'app',
  components: {
    loader
  },
  data(){
    return{

      loading: false
    }
  },
  mounted(){
     this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
:root {
  --main-bg-color:  #2874f0;
  --main-txt-color: #fff;
  --main-heading-color: rgb(95, 95, 95);
  --main-padding: 1em;
  --main-margin: 0.5em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  scroll-behavior: smooth;
  background: #f1f3f6;
}
/* .moveInUp-enter-active{  opacity: 0;  transition: opacity 1s ease-in;} */
.moveInUp-enter-active{  animation: fadeIn 1s ease-in;}@keyframes fadeIn{  0%{    opacity: 0;  }  50%{    opacity: 0.5;  }  100%{    opacity: 1;  }}
</style>
