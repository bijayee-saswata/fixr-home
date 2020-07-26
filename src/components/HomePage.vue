<template>
  <div class="layout" id="top">

    <!-- Wrapper for slides -->
    <div class="inner">
        <img src="../assets/hbg.jpeg" class="img-responsive" alt />
        <div class="row text">
          <div class="col-md-12 col-xs-12 search">
          <span class="col-md-3 col-md-offset-2 col-xs-5"><i class="fa fa-map-marker"></i>Bhubaneswar</span>  
          <input type="text" class="col-md-5 col-xs-7" v-model="query" placeholder=" Search..." style="font-family: FontAwesome, Arial; font-style: normal">
            <div class="option col-md-5 col-md-offset-5 col-xs-12">
              <ul>
                <li v-for="(match,index) in matches"
                  :key="index"
                  @click="selected(match.parent)"><i class="fa fa-search"></i>{{match.name}}</li>
              </ul>
            </div>
          </div>
        </div>
    </div>

    <ServiceComponent />

    <AppComponent/>
    
  </div>
</template>

<script>

import ServiceComponent from "./serviceComponent.vue";
import AppComponent from "./AppComponent";
import lists from '../assets/lists';

export default {
  name: "Home",
  data(){
    return{
      lists : [],
      query : ''
    }
  },
  components: {
    ServiceComponent,
    AppComponent
  },

  created() {
    this.lists = lists;
  },
  methods: {
    selected(index){
      this.$router.push({ path: `/services/#${index}` });
    }
  },
    computed: {
    matches(){
      if(this.query == '')
        return [];
     return this.lists.filter(list => list.name.toLowerCase().includes(this.query.toLowerCase()))          
    }
  },
  mounted() {
    /* eslint-disable */

    // Add smooth scrolling to all links in navbar + footer link
    $("a").on("click", function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          900,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.layout {
  padding-top: 3%;
  margin-top: 3%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  scroll-behavior: smooth;
}

.inner {
  width: 80%;
  margin-left: 10%;
  position: relative;
}

.inner img {
  width: 80vw;
  max-height: 50vh;
  /* max-height: 100%; */
}
.row {
    margin-right: 0;
    margin-left: 0;
}
.inner .text{
  position: absolute;
	    top: 0; right: 0;
	    bottom: 0; left: 0;
	    text-align: center;
	    background-color: rgba(0,0,0,0.3);
      vertical-align:middle;
}
.inner .text .search{
	    position: absolute; 
      top: 50%;
      left: 50%;
      transform: translate(-50%,0%);       
	}
  .inner .text .search span{
    padding: 10px;
    background: #fff;
    border-radius: 40px;
  }
  .inner .text .search .fa{
    padding-right: 5px;
  }
  .inner .text .search input{
    padding: 8.5px;
    border-radius: 40px;
    /* width: 20em; */
  }
  input[type="text"]::placeholder {  
                  
    /* Firefox, Chrome, Opera */ 
    text-align: center; 
  } 
.search .option{
  position: relative; 
  max-height: 150px;
  overflow-y: auto;
  border-radius: 10px;
}
.option::-webkit-scrollbar{
  width: 5px;
}
.search .option ul{
  list-style-type: none;
  text-align: left;
  padding: 0;
  margin: 0;
}
.search .option ul li{
  cursor: pointer;
  padding: 10px;
  background: #f1f1f1;
  font-size: 1em;
  
}
.search .option ul li i{
 padding: 1%;
}
.search .option ul li:hover{
  color: #000;
  font-weight: 800;
}
@media (max-width: 768px) {

  .inner {
  width: 100%;
  margin-left: 0;
}
.inner img {
  width: 100vw;
}
   .inner .text .search span{
    background: #fff;
    border-radius: 40px;
    font-size: 0.8em;
    /* padding: 0.8em 0 0.8em 0; */
  }
  
  .inner .text .search input{
   padding: 0.5em 0 0.5em 0;
  }
  .appBannerImage img{
    object-fit: contain;
    max-width: 20em;
}
}


</style>
