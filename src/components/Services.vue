<template>
  <div class="serviceLayout">
    <Nav></Nav>
    <div class="sLayout">
      <img src="../assets/sbg.jpeg" alt />
        <!-- <h2>Flat 10% off</h2> -->
      <!-- <div class="text">
      </div> -->
    </div>

    <!-- beauty & spa -->
    <section id="BeautyAndSpa" class="box">
      <h3 :class="[ BeautySpa ? 'active' : '' ]">Beauty & Spa</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv2"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- cleaning -->
    <section id="Cleaning" class="box">
      <h3 :class="[ Cleaning ? 'active' : '' ]">Cleaning</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv4"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Electronic Gadget -->
    <section id="ElectronicGadget" class="box">
      <h3 :class="[ ElectronicGadget ? 'active' : '' ]">Electronic Gadget</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv4"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- home Renovation -->
    <section id="HomeRenovation" class="box">
      <h3 :class="[ HomeRenovation ? 'active' : '' ]">Home Renovation</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv1"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appliances-->
    <section id="HomeAppliances" class="box">
      <h3 :class="[ HomeAppliances ? 'active' : '' ]">Home Appliances</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv3"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- Electronic Gadget -->
    <section id="IndustryService" class="box">
      <h3 :class="[ IndustryService ? 'active' : '' ]">Industry Service</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv4"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Electronic Gadget -->
    <section id="PackerAndMover" class="box">
      <h3 :class="[ PackerMover ? 'active' : '' ]">Packer & Mover</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv4"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Electronic Gadget -->
    <section id="WeddingAndEvents" class="box">
      <h3 :class="[ WeddingEvents ? 'active' : '' ]">Wedding & Events</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv4"
              v-bind:key="serv.id"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="addServices(serv.title)"
            >
              <img :src="serv.img" alt />
              <div class="text-block">
                <h4 >{{serv.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- horizontal scroll card -->
    <section id="recommended">
      <h3>Recommended Services</h3>
      <div class>
        <div class="main">
          <div class="slider-nav">
            <div class="house" v-for="recm in  recommended" v-bind:key="recm.id">
              <img :src="recm.img" alt />
              <div class="text-block">
                <h4 >{{recm.title}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <allServices /> -->
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
                        v-model="bName"
                        id="name"
                        type="text"
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
              class="btn btn-primary"
              v-if="!reqSent"
              @click="requestCall"
            >Submit</button>
          </div>
        </div>
      </div>
    </div>
    <FooterLayout  class="footer"/>
  </div>
</template>

<script>
//import allServices from './allServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import Nav from "./Nav";
import db from "../firebaseinit";
import FooterLayout from "./Footer";
export default {
  name: "Services",

  components: {
    Nav,
    FooterLayout
  },
  data() {
    return {
      reqSent: false,
      HomeRenovation: false,
      BeautySpa: false,
      HomeAppliances: false,
      ElectronicGadget: false,
      Cleaning: false,
      IndustryService: false,
      PackerMover: false,
      WeddingEvents: false,
      ref: null,
      bName: "",
      bPhone: null,
      bAddress: null,
      bServ: null,
      error: false,
      serv: null,
      errorMsg: "",
      recommended: [
        {
          id: 1,
          title: "Home Appliances",
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAC%2F1-0t-magicool-inverter-3s-copr-w-i-odu-1-0-split-whirlpool-original-imaffkcnbu8a3dhe.jpeg?alt=media&token=6795be02-cbe6-4bd8-986a-0fcc23fff37b"
        },
        {
          id: 2,
          title: "Washing Machine",
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
    // HomeRenovation
      serv1: [
        {
          id: 1,
          title: 'Carpenter',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FCarpenter%2F175660281_1.jpg?alt=media&token=ac150539-1230-4de2-a7ab-26b562e2b681"
        },
        {
          id: 2,
          title: 'Cleaner',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeCleaning%2Fdac9cf19-daff-40b5-ac96-794ef4c89414.jpg?alt=media&token=2ace202a-06ed-400b-b00b-0ffaadb366a5"
        },
        {
          id: 3,
          title: 'Plumber',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FPlumber%2Fplumbing%20(1).jpg?alt=media&token=b3d30c1c-c8b7-4ae3-857b-7b0b0ac24127"
        },
        {
          id: 4,
          title: 'Painter',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FPainting%2Fhome-painting-service-1486720599-2719984.jpeg?alt=media&token=2901895f-44a5-4d82-92f2-01f33e0b1cff"
        },
        {
          id: 5,
          title: 'Others',
          img: ''
        }
      ],
      // BeautySpa
      serv2: [
        {
          id: 1,
          title: 'Facial',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FBridalMakeup%2Fservice.jpg?alt=media&token=2e6db77a-ccd3-44ab-9c6e-7b9aed81f205"
        },
        {
          id: 2,
          title: 'Manicure',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeSpa%2Fimg.jpg?alt=media&token=6340f058-60a8-4ab0-885b-163deafcf136"
        },
        {
          id: 3,
          title: 'Pedicure',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeSpa%2Fpedicure.jpg?alt=media&token=b754f894-c4c5-4595-bf73-4b5138dfef81"
        },
        {
          id: 4,
          title: "Spa",
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeSpa%2Fspa.jpg?alt=media&token=a3d129fb-995f-443f-917c-c2ba55f0609c"
        },
        {
          id: 5,
          title: 'Others',
          img: ''
        }
      ],
      // HomeAppliances
      serv3: [
        {
          id: 1,
          title: 'Title',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2Fappliances-pic.jpg?alt=media&token=9f3ac601-4b40-4502-a3f8-c86a8d6562a1"
        },
        {
          id: 2,
          title: 'Title',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2Fimg.jpg?alt=media&token=af2447b3-2368-4b1e-bd26-54ab9308c2b9"
        },
        {
          id: 3,
          title: 'Title',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2FElectric-Appliances-Repairs.jpg?alt=media&token=7b10ab91-0b0a-498b-ba35-a42b21e14644"
        },
        {
          id: 4,
          title: 'Title',
          img:
            "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FAppliances%2F1458744193670.jpeg?alt=media&token=5033117f-90c8-4d21-b45e-3c351289c1b5"
        },
        {
          id: 5,
          title: 'Others',
          img: ''
        }
      ],
      //cleaning
      serv4: [
        {
          id: 1,
          title: 'Home-Cleaning',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FHomeCleaning%2Fdac9cf19-daff-40b5-ac96-794ef4c89414.jpg?alt=media&token=2ace202a-06ed-400b-b00b-0ffaadb366a5"
        },
        {
          id: 2,
          title: 'Car-Cleaning',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FCarCleaningRepairing%2Fcar.jpg?alt=media&token=167a6077-7aee-4f77-9e39-44007210d634"
        },
        {
          id: 3,
          title: 'Dry-Cleaning',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FDryCleaning%2Fdryclean.jpg?alt=media&token=14257e6d-4913-4a4f-bbe2-97420b2d3396"
        },
        {
          id: 4,
          title: 'Utensils-Cleaning',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2FCarCleaningRepairing%2Futensil.jpg?alt=media&token=dbc0a2f1-721d-4789-9087-9c3658b97c24"
        },
        {
          id: 5,
          title: 'Others',
          img: ''
        }
      ]
    };
  },
  methods: {
    requestCall(e) {
      e.preventDefault();
      if (!this.bName || !this.bPhone || !this.bAddress) {
        this.error = true;
        this.errorMsg = "Please fill all the form.";
      } else if (isNaN(this.bPhone) || this.bPhone.length != 10) {
        this.error = true;
        this.errorMsg = "Please enter 10 digit mobile number.";
        return false;
      } else {
        db.collection("callBack").add({
          service: this.bServ,
          name: this.bName,
          phone: this.bPhone,
          Address: this.bAddress
        });
        // alert("Request sent Successful...");
        this.reqSent = true;
      }
    },
    addServices(serv) {
      this.bName = '';
      this.bPhone = '';
      this.bAddress = '';
      this.reqSent = false;
      this.bServ = serv;
    }
  },
  /*created(){
    if(this.id){
     this.ref= this.id.replace(/ /g,'');
    if(this.ref == "HomeRenovation"){
      this.HomeRenovation = true;
      // document.getElementById('HomeRenovation').scrollIntoView();
    }
    if(this.ref == "Beauty&Spa"){
      this.BeautySpa = true;
      // document.getElementById('BeautySpa').scrollIntoView();
    }
    if(this.ref == "HomeAppliances"){
      this.HomeAppliances = true;
      // document.getElementById('HomeAppliances').scrollIntoView();
    }
    if(this.ref == "ElectronicGadget"){
      this.ElectronicGadget = true;
      // document.getElementById('ElectronicGadget').scrollIntoView();
    }
    if(this.ref == "Cleaning"){
      this.Cleaning = true;
     // document.getElementById('Cleaning').scrollIntoView();
    }
    if(this.ref == "IndustryService"){
      this.IndustryService = true;
      //document.getElementById('IndustryService').scrollIntoView();
    }
    if(this.ref == "Packer&Mover"){
      this.PackerMover = true;
      // location.href = "#";
      // location.href = "#PackerMover";
    $('html,body').animate({
        scrollTop: $("#PackerMover").offset().top},
        'slow');
      //$('html, body').animate({ scrollTop: $('#PackerMover').offset().top }, 'slow');
    }
    if(this.ref == "Wedding&Events"){
      this.WeddingEvents = true;
      // document.getElementById('WeddingEvents').scrollIntoView();
    }
    }
    }, */
    props:[
      'id'
    ],
  mounted() {
    /* eslint-disable */
   
    $(".slider-nav").not('.slick-initialized').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      scrollIntoViewOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
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
    //  this.ref = this.$route.params.id.replace(/ /g,'');
    //   console.log(ref);
  }
};
</script>

<style scoped>
/* *{
  padding: 0%;
  margin: 0%;
} */
.serviceLayout {
  background: rgb(236, 234, 234);
  padding-top: 3%;
}
/* .sLayout{
  
} */

/* .sLayout img {
  padding-top: 4%;
  width: 80%;
  height: 50vh;
  object-fit: cover;
} */

.sLayout{
  width: 80%;
  margin-left: 10%;
	    /* top: 0; right: 0;
	    bottom: 0; left: 0; */
      height: 50vh;
	    
	    background-color: rgba(0,0,0,0.3);
}
.sLayout img{
  width: 100%;
  height: 100%;
}
.sLayout  h2{
   position: absolute; 
      color: aqua;
      top: 30%;
      left: 45%;
      transform: translate(-30%,-45%);
}
#recommended,
.box {
  width: 80%;
  margin-left: 10%;
}
#recommended > h3,.box> h3{
  text-align: left;
  /* color: #000; */
  font-weight: 600;
}
.main .house {
  background: #fff;
  margin-right: 5px;
  height: 10em;
  position: relative;
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
@media (max-width: 768px) {
  .serviceLayout {
    width: 100%;
    padding-top: 20%;
  }
  .sLayout{
  width: 90%;
  margin-left: 5%;
	    /* top: 0; right: 0;
	    bottom: 0; left: 0; */
      height: 50vh;
	    
	    background-color: rgba(0,0,0,0.6);
}
  .sLayout img {
    width: 100%;
    height: 100%;
  }
  .sLayout  h2{
   position: absolute; 
      color: aqua;
      top: 35%;
      left: 45%;
      transform: translate(-35%,-45%);
}
  #recommended > h3,
  #trending1 > h3 {
    text-align: center;
  }
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

.well input.btn.btn-lg {
  height: 60px;
  width: 100%;
  margin: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}

.footer{
  margin-top: var(--main-margin);
}

@media (max-width: 768px) {
  .well input.btn.btn-lg {
    width: 100%;
  }
}
</style>
