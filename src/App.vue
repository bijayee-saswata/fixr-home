<template>
  <div id="app">
    <loader v-if="loading" />
    <Nav v-if="!loading"></Nav>
    <transition name="moveInUp" v-if="!loading">
      <router-view/>
    </transition>
    <!-- Footer Section -->
      <FooterLayout class="footer" v-if="!loading" />
  </div>
</template>

<script>

import loader from './components/loader';
import Nav from "./components/Nav";
import FooterLayout from "./components/Footer";
export default {
  name: 'app',
  components: {
    loader,
    FooterLayout,
    Nav
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
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--main-bg-color);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: var(--main-bg-color);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--main-bg-color);
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--main-bg-color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: blue; 
}

input:focus{
  outline: none !important;
}

/* Remove arrow from input type number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  scroll-behavior: smooth;
  background: #f1f3f6;
}
.footer{
  margin-top: 3%;
}
/* .moveInUp-enter-active{  opacity: 0;  transition: opacity 1s ease-in;} */
.moveInUp-enter-active{  animation: fadeIn 1s ease-in;}@keyframes fadeIn{  0%{    opacity: 0;  }  50%{    opacity: 0.5;  }  100%{    opacity: 1;  }}
</style>
