<template>
  <div class="sLayout">
    <div class>
      <ul class="wrapper">
        <li
          v-for="service in services"
          v-bind:key="service.id"
          @click="Services(service.header)"
        >
        <router-link to="/services/service.header">
          <img :src="service.img" alt="service" />
          <p>{{service.header}}</p>
        </router-link>
        </li>
      </ul>

      <!-- Modal 
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLongTitle">Online Booking Request</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="onlineReq">
                <div>
                  <div class="well">
                    <div
                      v-if="reqSent"
                      style="color: green"
                    >Your resonse has been submitted. You will receive a callback from us soon. :)</div>
                    <form action="#" v-else>
                      <p v-if="error" style="color:red;">{{errorMsg}}</p>
                      <div class="input-group">
                        <input
                          class="btn btn-lg"
                          name="bServ"
                          id="serv"
                          v-model="bServ"
                          type="text"
                          placeholder="Your Service"
                          required
                          disabled
                        />
                        <input
                          class="btn btn-lg"
                          name="bName"
                          id="name"
                          type="text"
                          v-model="bName"
                          placeholder="Your Name"
                          required
                        />
                        <input
                          class="btn btn-lg"
                          name="bPhone"
                          id="phone"
                          v-model="bPhone"
                          type="text"
                          placeholder="Your Mobile Number"
                          required
                        />
                        <input
                          class="btn btn-lg"
                          name="bAddress"
                          id="address"
                          v-model="bAddress"
                          type="text"
                          placeholder="Your Address"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                v-if="!reqSent"
                class="btn btn-primary"
                @click="requestCall"
              >Submit</button>
            </div>
          </div>
        </div>
      </div>-->
      <!-- house -->
      <section class id="trending1">
        <h3>Home Appliances</h3>
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
    </div>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";

// import db from "../firebaseinit";
export default {
  name: "ServicesComponent",
  data() {
    return {
      errorMsg: "",
      service: null,
      services: [
        {
          id: 1,
          header: "Beauty & Spa",
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
          header: "Electronic Gadget",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Felectronic_gadget%2F3.png?alt=media&token=103a7625-b6f8-4ad3-8a52-494163e77626"
        },
        {
          id: 4,
          header: "Home Renovation",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fhouse_renovation%2Fpainter%2F2.png?alt=media&token=cb28e0b2-c77b-4c96-a919-29c1d34bec9d"
        },
        {
          id: 5,
          header: "Home Service",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fhome_delivery%2F3.png?alt=media&token=5c5976fb-cc5a-4cab-848e-d810894c2879"
        },
        {
          id: 6,
          header: "Industry Service",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Findustry_service%2Fsecurity%2F3.png?alt=media&token=7bd03af8-fdff-4648-8dc6-8434e42ff321"
        },
        {
          id: 7,
          header: "Packer & Mover",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fpackers%26movers%2F10.png?alt=media&token=a0c4b8f9-b961-4449-afbf-752661997f44"
        },
        {
          id: 8,
          header: "Wedding & Events",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/cliparts%2Fevent_management%2Fparty%26event%2F1.png?alt=media&token=9fb434d5-a620-46a1-9928-80dc4591f387"
        }
      ],
      recommended: [
        {
          id: 1,
          title: "Home Renovation",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAC%2F1-0t-magicool-inverter-3s-copr-w-i-odu-1-0-split-whirlpool-original-imaffkcnbu8a3dhe.jpeg?alt=media&token=6795be02-cbe6-4bd8-986a-0fcc23fff37b"
        },
        {
          id: 2,
          title: "Home Appliances",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2FAppliance-repair-san-antonio-44.jpg?alt=media&token=d06c41ca-743a-4c15-a948-8412fa73c43b"
        },
        {
          id: 3,
          title: "Electricians",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FTechnicians%2FHandyman-Electrical-Services-In-Dubai.jpg?alt=media&token=c18579aa-307e-4d97-8b19-ec41c2acd3b1"
        },
        {
          id: 4,
          title: "Home Spa",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeSpa%2FHeader-1200x490.jpg?alt=media&token=cb77b2d9-ea8c-492c-a0ab-b165ef9adb63"
        },
        {
          id: 5,
          title: "Mobile Repairing",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FMobileRepairing%2FMobileRepair.jpg?alt=media&token=2bd541dd-26b9-40e6-950b-78778c1a0f95"
        }
      ],
      serv1: [
        {
          id: 1,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2Fappliances-pic.jpg?alt=media&token=9f3ac601-4b40-4502-a3f8-c86a8d6562a1"
        },
        {
          id: 2,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2Fimg.jpg?alt=media&token=af2447b3-2368-4b1e-bd26-54ab9308c2b9"
        },
        {
          id: 3,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2FElectric-Appliances-Repairs.jpg?alt=media&token=7b10ab91-0b0a-498b-ba35-a42b21e14644"
        },
        {
          id: 4,
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2F1458744193670.jpeg?alt=media&token=5033117f-90c8-4d21-b45e-3c351289c1b5"
        }
      ]
    };
  },
  methods: {
    // requestCall(e) {
    //   e.preventDefault();
    //   if (!this.bName || !this.bPhone || !this.bAddress) {
    //     this.error = true;
    //     this.errorMsg = "Please fill all the form.";
    //   } else if (isNaN(this.bPhone) || this.bPhone.length != 10) {
    //     this.error = true;
    //     this.errorMsg = "Please enter 10 digit mobile number.";
    //     return false;
    //   } else {
    //     db.collection("callBack").add({
    //       service: this.bServ,
    //       name: this.bName,
    //       phone: this.bPhone,
    //       Address: this.bAddress
    //     });
    //     // alert("Request sent Successful...");
    //     // console.log("send");
    //     this.reqSent = true;
    //   }
    // },
    Services(serv) {
      this.service = serv;
      this.$router.push({ path: `/services/${this.service}` })
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
/* .sLayout{
  width: 80%;
  margin-left: 10%;
} */
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
  max-height: 12em;
  list-style: none;
  /* box-shadow: 4px 4px 4px rgba(10, 100, 150, 0.2);
    border-radius: 3%; */
  cursor: pointer;
}
.wrapper li img {
  max-width: 30%;
  height: auto;
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
.wrapper li a:hover{
  font-weight: 800;
  color: #ccc;
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
    width: 80%;
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
