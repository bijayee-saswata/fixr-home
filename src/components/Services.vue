<template>
  <main class="Layout" id="top">
    <section class="sLayout">
      <img :src="bannerImage" alt="Service Banner" />
        <!-- <h2>Flat 10% off</h2> -->
      <!-- <div class="text">
      </div> -->
    </section>
    <div class="heading">
      <h2 class="title">Service We Provide</h2>
    </div>
    <!-- cleaning -->
    <section v-if="!loading">
      <ServiceList v-for="(service, index) in serviceList" :key="index" v-bind:name="service" />  
    </section>
    <AppComponent/>
  </main>
</template>

<script>

import AppComponent from "./AppComponent";
import ServiceList from "./ServiceList";
import {db, storage} from '../firebaseinit';
export default {
  name: "Services",
  components : {
    AppComponent,
    ServiceList
  },
  data() {
    return {
      serviceList : [],
      loading : true,
      error : false,
      bannerImage : ''
    };
  },

  created(){
    db.collection("ServiceTypes").get().then((docs)=>{
      docs.forEach(element => {
        if(element.id !== 'Others')
          this.serviceList.push(element.id);
      });
      this.loading = false;
  }).catch (err => {
    this.error = true;
    console.log(err);
    
  })
  storage.ref().child('Imageforwebsite/01.our services/Picture72.png').getDownloadURL().then((img) => {
      this.loading = false;
      this.bannerImage = img;     
  });
  }
};
</script>

<style scoped>

.sLayout img{
  height: 60vh;
  width: 100%;
  object-fit: fill;
}
.sLayout  h2{
  position: absolute; 
  color: aqua;
  top: 30%;
  left: 45%;
  transform: translate(-30%,-45%);
}
#recommended{
  width: 80%;
  margin-left: 10%;
}

#recommended > h3{
  text-align: left;
  /* color: #000; */
  font-weight: 600;
}
.fa-spinner {
    color: var(--main-bg-color);
  }
.heading {
  display: flex;
  justify-content: center;
}
.title {
  padding: 1% 2%;
  font-weight: 600;
  border: 2px solid lightgrey;
  border-radius: 40px;
  font-size: 1.5em;
}

@media (max-width: 768px) {
  .sLayout img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  #recommended > h3,
  #trending1 > h3 {
    text-align: center;
  }
}

</style>
