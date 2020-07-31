<template>
    <main>
        <section :id="name.replace(/ /g,'')" class="box">
            <h3>{{name}}</h3>
            <div v-if="!loading" :ref="name.replace(/ /g,'')">
                <div class="main">
                <div class="slider-nav">
                  
                    <div
                    class="house"
                    v-for="(serv, index) in  service"
                    v-bind:key="index"
                    >
                    <router-link :to= "{name : 'description', params : {slug: serv.title, parent: name }}">
                    <img :src="serv.img" alt />
                    <div class="text-block">
                        <h4 >{{serv.title}}</h4>
                    </div>
                    </router-link>
                    </div>
                </div>
                </div>
            </div>
            <div class="wrapper" v-if="loading">
              <div class="image animate"></div>
              <div class="image animate"></div>
              <div class="image animate"></div>
              <div class="image animate"></div>
            </div>
            <!-- <i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true" v-if="loading"></i> -->
            </section>
    </main>
</template>

<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import {db} from "../firebaseinit";

export default {
    name : "ServiceList",
    props : {
        name : {
            type : String,
            required: true
        },
        refName : {
          type : String
        }
    },
    data() {
    return {
      service : [],
      loading : true,
      
    }
    },
    created () {
      db.collection("ServiceTypes").doc(this.name).collection('sub').get().then(docs => {
        this.service = [];
        docs.forEach(doc => {
          let data = {
            title : doc.id,
            img : doc.data().weburl
          }
          this.service.push(data);
        })
        this.loading = false;
      })  
  },
  beforeUpdate() {
     if ($('.slider-nav').hasClass('slick-initialized')) {
        $('.slider-nav').slick('unslick');
    }
  },
    updated() {
    /* eslint-disable  */
   
    $(".slider-nav").not('.slick-initialized').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      scrollIntoViewOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            infinite: true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }); 

    let element = this.$refs[this.$route.params.refName];
    
    if(element) {
      let top = element.offsetTop;
      
      window.scrollTo(0, top-100);
      
    }
  },

}
</script>

<style>
.main .house {
  background: #fff;
  margin-right: 10px;
  height: 12em;
  position: relative;
}

.box {
  width: 80%;
  margin-left: 10%;
}

.box> h3{
  text-align: left;
  /* color: #000; */
  font-weight: 600;
}

.active{
  color: var(--main-bg-color);
}
.text-block {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  color: white;
  /* padding-left: 20px;
  padding-right: 20px; */
}
.text-block h4{
  position: absolute;
  font-weight: 500;
  font-size: 1.2em;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.main img {
  margin: 2%;
  text-align: center;
  height: 12em;
  width: 96%;
  /* border-radius: 5%; */
  /* box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.2); */
}
.main p {
  font-size: 1.2em;
}

.fa-spinner {
  color: var(--main-bg-color);
}

/* shimmer effect */
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
.image {
  height: 150px;
  width : 250px;
  background: #777;
}

.animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>