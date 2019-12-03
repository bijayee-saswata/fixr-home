<template>
  <header>
    <div class="layout" id="top">
      <Nav></Nav>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/hbg.jpeg" class="img-responsive" alt />
            <div class="text">
              <h2>Flat 10% off</h2>
            </div>
          </div>

          <div class="item">
            <img src="../assets/sbg.jpeg" class="img-responsive" alt />
            <div class="text">
              <h2>Flat 10% off</h2>
            </div>
          </div>

          <div class="item">
            <img src="../assets/bg.jpg" class="img-responsive" alt />
            <div class="text">
              <h2>Flat 10% off</h2>
            </div>
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <ServiceComponent />

      <!-- quality -->
      <section class="quality slideanim">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-4" >
              <i class="fa fa-check-square-o fa-2x"></i>
              <h3>Trusted Professionals</h3>
            </div>
            <div class="col-md-4 col-xs-4 middle">
              <i class="fa fa-leaf fa-2x"></i>
              <h3>Matched to Your Needs</h3>
            </div>
            <div class="col-md-4 col-xs-4">
              <i class="fa fa-thumbs-up fa-2x"></i>
              <h3>Hassle Free Service Delivery</h3>
            </div>
          </div>
        </div>
      </section>
      <!-- Customer reviews -->
      <!-- <div><i class="fa fa-snowflake-o" aria-hidden="true" style="position:fixed;top:80%;right:1.5%;"></i></div> -->
      <!-- Footer Section -->
      <FooterLayout />
    </div>
  </header>
</template>

<script>
import Nav from "./Nav";
import ServiceComponent from "./serviceComponent.vue";
//import allServices from './allServices'
import FooterLayout from "./Footer";
export default {
  name: "Home",
  components: {
    Nav,
    ServiceComponent,
    FooterLayout
  },

  created() {
    //
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
/* @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; */

.layout {
  padding-top: 3%;
  /* margin-top: 6%; */
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  scroll-behavior: smooth;
}

.carousel {
  width: 80%;
  margin-left: 10%;
}

.carousel-inner img {
  /* width: 80vw; */
  min-width: 80vw;
  max-height: 50vh;
  /* max-height: 100%; */
}
.carousel-inner .text{
  position: absolute;
	    top: 0; right: 0;
	    bottom: 0; left: 0;
	    text-align: center;
	    background-color: rgba(0,0,0,0.3);
      vertical-align:middle;
}
.carousel-inner .text h2{
	    position: absolute; 
      color: #fff; 
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);       
	}
@media (max-width: 768px) {
  .layout{
    padding-top: 20%;
  }
  .carousel {
  width: 100%;
  margin-left: 0;
}
.carousel-inner img {
  width: 100vw;
}
.carousel-inner .text h2{
  font-size: 1.5em;
  position: absolute; 
      color: #fff; 
      top: 40%;
      left: 50%;
      transform: translate(-40%,-50%);     
}
}

/* quality */
.quality .container {
  margin-top: var(--main-margin);
  margin-bottom: var(--main-margin);
  /* border-right: 1px groove lightgray;
  border-left: 1px groove lightgray; */
  text-align: center;
}
.quality .col-md-4 h3 {
  color: #000;
  font-weight: 500;
  font-size: 1.5em;
}
.quality .fa {
  color: var(--main-bg-color);
}
.quality .middle {
  border-left: 1px groove lightgray;
  border-right: 1px groove lightgray;
}
@media (max-width:760px) {
  .quality h3{
    font-size: 1em;
  }
}
</style>
