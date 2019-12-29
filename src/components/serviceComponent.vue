<template>
  <div class="sLayout">
    <section id="home">
      <h3>Services We Provide</h3>
      <ul class="wrapper">
        <li
          v-for="service in services"
          v-bind:key="service.id"
          @click="Services(service.header)"
        >
          <img :src="service.img" alt="service" />
          <p>{{service.header}}</p>
        </li>
      </ul>
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
            <div
              v-for="serv in serv1"
              v-bind:key="serv.id"
              class="house"
            >
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

export default {
  name: "ServicesComponent",
  data() {
    return {
      errorMsg: "",
      services: [
        {
          id: 1,
          header: "Makeup And Hairstyle",
          subList: "",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fbeauty%26spa%2Fhaircut%2F2.png?alt=media&token=305b0706-02ea-4cb5-9b64-e4505a009d4c"
        },
        {
          id: 2,
          header: "Cleaning",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fcleaning%2F6.png?alt=media&token=07d9c1ea-19f3-48c4-b5aa-626d11188c06"
        },
        {
          id: 3,
          header: "Electronics And IT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Felectronic_gadget%2F3.png?alt=media&token=103a7625-b6f8-4ad3-8a52-494163e77626"
        },
        {
          id: 4,
          header: "Repairing And Renovation",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fhouse_renovation%2Fpainter%2F2.png?alt=media&token=cb28e0b2-c77b-4c96-a919-29c1d34bec9d"
        },
        {
          id: 5,
          header: "Home Appliances",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fhouse_appliance%2F2.png?alt=media&token=8c4e37c1-45ee-4477-97cc-8671fb0243be"
        },
        {
          id: 6,
          header: "Corporate Service",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Findustry_service%2Fsecurity%2F3.png?alt=media&token=7bd03af8-fdff-4648-8dc6-8434e42ff321"
        },
        {
          id: 7,
          header: "Packer And Mover",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fpackers%26movers%2F10.png?alt=media&token=a0c4b8f9-b961-4449-afbf-752661997f44"
        },
        {
          id: 8,
          header: "Event Management",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fevent_management%2Fparty%26event%2F1.png?alt=media&token=9fb434d5-a620-46a1-9928-80dc4591f387"
        }
      ],
      recommended: [
        {
          id: 1,
          title: "Home Renovation",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F22.Plumbing%2F4Q2EYRR2XMI6TMIL6BNCFZ2YMU.jpg?alt=media&token=5556ea1c-6996-4c89-8ecc-9305e5367b80"
        },
        {
          id: 2,
          title: "Home Appliances",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F11.Air%20conditioner%2Fpel-air-conditioners-top-banner.jpg?alt=media&token=28bf29a3-23e7-4917-b770-51b2500dd079"
        },
        {
          id: 3,
          title: "Electricians",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F21.Electrical%2Fselection-314-500x500.png?alt=media&token=7cace71e-d6b3-4062-85f0-c617abfb2203"
        },
        {
          id: 4,
          title: "Home Spa",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F52.Party%20Makeup%2FHeader-1200x490.jpg?alt=media&token=56702d82-3a0d-48b0-ad0f-1bde95b9a195"
        },
        {
          id: 5,
          title: "Mobile Repairing",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        }
      ],
      serv1: [
        {
          id: 1,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"
        },
        {
          id: 2,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"

        },
        {
          id: 3,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"

        },
        {
          id: 4,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=74b9bafd-fdfb-4195-94e4-d1e17e8d6882"

        }
      ]
    };
  },
  methods: {
    Services(serv) {
      serv= serv.replace(/ /g,'');
      this.$router.push({ path: `/services/#${serv}` })
    }
  },
  mounted() {
    /* eslint-disable */

    $(".slider-nav").not('.slick-initialized').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
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
  }
};
</script>

<style scoped>
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
.wrapper li a{
  text-decoration: none;
  color: #000;
}
.wrapper li:hover{
  font-weight: 800;
  background-color: #ccc;
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
#home h3{
   color: #000;
  font-weight: 600;
}
@media (max-width: 768px) {
  #recommended > h3,
  #trending1 > h3 {
    text-align: center;
  }
}
/* .main{
  background: #fff;
  margin: 1%;
} */
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
