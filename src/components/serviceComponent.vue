<template>
  <div class="sLayout">
    <section id="home">
      <h3>Services We Provide</h3>
      <ul class="wrapper" v-if="!loading">
        <li v-for="service in services" v-bind:key="service.id" @click="Services(service.id)">
          <img :src="service.url" :alt="service.id" />
          <p>{{service.id}}</p>
        </li>
      </ul>
      <div class="grid" v-if="loading">
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
        <div>
          <img src="../assets/loading.jpeg" alt="loading" />
        </div>
      </div>
    </section>

    <!-- horizontal scroll card -->
    <section class id="recommended">
      <h3>Recommended Services</h3>
      <div class="main">
        <div class="slider-nav">
          <div v-for="recm in  recommended" v-bind:key="recm.id">
            <img :src="recm.img" alt />
            <p>{{recm.title}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- house -->
    <section class id="trending1">
      <h3>Special Offers</h3>
      <div class="main">
        <div class="slider-nav">
          <div v-for="serv in serv1" v-bind:key="serv.id" class="house">
            <img :src="serv.img" alt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import { db } from "../firebaseinit";
export default {
  name: "ServicesComponent",
  data() {
    return {
      errorMsg: "",
      loading: true,
      services: [],
      recommended: [
        {
          id: 1,
          title: "Home Renovation",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F22.Plumbing%2F4Q2EYRR2XMI6TMIL6BNCFZ2YMU.jpg?alt=media&token=5556ea1c-6996-4c89-8ecc-9305e5367b80"
        },
        {
          id: 2,
          title: "Home Appliances",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F11.Air%20conditioner%2Fpel-air-conditioners-top-banner.jpg?alt=media&token=28bf29a3-23e7-4917-b770-51b2500dd079"
        },
        {
          id: 3,
          title: "Electricians",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F21.Electrical%2Fselection-314-500x500.png?alt=media&token=7cace71e-d6b3-4062-85f0-c617abfb2203"
        },
        {
          id: 4,
          title: "Home Spa",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F52.Party%20Makeup%2FHeader-1200x490.jpg?alt=media&token=56702d82-3a0d-48b0-ad0f-1bde95b9a195"
        },
        {
          id: 5,
          title: "Mobile Repairing",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        }
      ],
      serv1: [
        {
          id: 1,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        },
        {
          id: 2,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        },
        {
          id: 3,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        },
        {
          id: 4,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        }
      ]
    };
  },
  methods: {
    Services(serv) {
      serv = serv.replace(/ /g, "");
      this.$router.push({ name: "services", params: { refName: serv } });
    }
  },
  beforeUpdate() {
    if ($(".slider-nav").hasClass("slick-initialized")) {
      $(".slider-nav").slick("unslick");
    }
  },
  updated() {
    /* eslint-disable */

    $(".slider-nav")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        focusOnSelect: true,
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
  },
  created() {
    db.collection("ServiceTypes")
      .get()
      .then(docs => {
        docs.forEach(element => {
          if (element.id == "Others") {
            return;
          }
          let data = {
            id: element.id,
            status: element.data().status,
            url: element.data().weburl
          };
          this.services.push(data);
        });
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.grid div {
  max-width: 20em;
  object-fit: contain;
}
.grid div img {
  max-width: 20em;
  object-fit: contain;
}
.wrapper {
  margin-top: 1%;
  width: 80%;
  margin-left: 10%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  font-size: 1.2em;
}
.wrapper li {
  background-color: #fff;
  height: 10em;
  list-style: none;
  /* box-shadow: 4px 4px 4px rgba(10, 100, 150, 0.2);
    border-radius: 3%; */
  cursor: pointer;
}
.wrapper li img {
  max-width: 50%;
  height: 6.2em;
  /* max-width: 100%;
    max-height: 100%; */
  padding: 5%;
  object-fit: cover;
}
.wrapper li p {
  padding: 1%;
}
.wrapper li a {
  text-decoration: none;
  color: #000;
}
.wrapper li:hover {
  font-weight: 800;
  background-color: #ccc;
}
.fa-spinner {
  color: var(--main-bg-color);
}
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin-top: 8%;
    margin-left: 5%;
    padding: 0;
  }
  .wrapper li img {
    max-width: 90% !important;
    object-fit: contain;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid div img {
    max-width: 10em;
  }
}
#recommended,
#trending1 {
  width: 80%;
  margin-left: 2%;
  margin-left: 10%;
}
#recommended > h3,
#trending1 > h3 {
  text-align: left;
  color: #000;
  font-weight: 600;
}
#home h3 {
  color: #000;
  font-weight: 600;
}
@media (max-width: 768px) {
  #recommended > h3,
  #trending1 > h3 {
    text-align: center;
  }
}

.main .house {
  background: #fff;
  margin-right: 5px;
}
.main img {
  margin: 1%;
  text-align: center;
  height: 12em;
  width: 98%;
  object-fit: cover;
  /* border-radius: 5%; */
  /* box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.2); */
}
.main p {
  font-size: 1.2em;
}

/* booking via callback */

.well input.btn.btn-lg {
  height: 60px;
  width: 100%;
  margin: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .well input.btn.btn-lg {
    width: 100%;
  }
}
</style>
