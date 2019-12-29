<template>
  <div class="Layout">
    <section class="sLayout">
      <img src="../assets/sbg.jpeg" alt />
        <!-- <h2>Flat 10% off</h2> -->
      <!-- <div class="text">
      </div> -->
    </section>

    <!-- beauty & spa -->
    <section id="MakeupAndHairstyle" class="box">
      <h3>Makeup & Hairstyle</h3>
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
      <h3>Cleaning</h3>
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
    <section id="ElectronicsAndIT" class="box">
      <h3>Electronics & IT</h3>
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
    <section id="RepairingAndRenovation" class="box">
      <h3>Repairing & Renovation</h3>
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
      <h3>Home Appliances</h3>
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
    <section id="CorporateService" class="box">
      <h3>Corporate Service</h3>
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
      <h3>Packer & Mover</h3>
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
    <section id="EventManagement" class="box">
      <h3>Event Management</h3>
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
                        placeholder="Name"
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bPhone"
                        id="phone"
                        v-model="bPhone"
                        type="text"
                        placeholder="Mobile Number"
                        required                                                                                                                                                      
                      />
                      <input
                        class="btn btn-lg"
                        name="bPlot"                                                                                                                                                                                                                                                            
                        id="plot"
                        v-model="bPlot"
                        type="text"
                        placeholder="Plot No."
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bLocality"
                        id="locality"
                        v-model="bLocality"
                        type="text"
                        placeholder="Locality"
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bCity"
                        id="city"
                        v-model="bCity"
                        type="text"
                        disabled
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bPin"
                        id="pin"
                        v-model="bPin"
                        placeholder="Pin Code"
                        type="text"
                        required
                      />
                      <div>
                        <input type="date" class="btn btn-sm" name="date" v-model="bDate" required>
                        <select name="slot" id="slot" v-model="bSlot" class="btn btn-sm">
                            <option value="10AM-12PM">10AM - 12PM</option>
                            <option value="10AM-12PM">12PM - 02PM</option>
                            <option value="10AM-12PM">02PM - 04PM</option>
                            <option value="10AM-12PM">04PM - 06PM</option>
                        </select>
                      </div>
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
            >Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import allServices from './allServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import db from "../firebaseinit";
export default {
  name: "Services",
  data() {
    return {
      reqSent: false,
      ref: null,
      bName: "",
      bPhone: null,
      bPlot: null,
      bLocality: null,
      bCity: "Bhubaneswar",
      bPin: null,
      bDate: null,
      bSlot: "10AM-12PM",
      bServ: null,
      error: false,
      serv: null,
      errorMsg: "",
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
    // HomeRenovation
      serv1: [
        {
          id: 1,
          title: 'Electrical',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F21.Electrical%2Fselection-314-500x500.png?alt=media&token=7cace71e-d6b3-4062-85f0-c617abfb2203"
        },
        {
          id: 2,
          title: 'Interior Design',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F25.Interior%20Design%2Fslide1.jpg?alt=media&token=0fd2e993-3cc7-4716-a9d6-cc39bffaf4f9"
        },
        {
          id: 3,
          title: 'Plumber',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F22.Plumbing%2F4Q2EYRR2XMI6TMIL6BNCFZ2YMU.jpg?alt=media&token=5556ea1c-6996-4c89-8ecc-9305e5367b80"
        },
        {
          id: 4,
          title: 'Painter',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F24.Painting%2Fabirchcreekinn-paint.jpg?alt=media&token=0e8ac13c-0170-4168-9fd9-b70e17dfe255"
        },
        {
          id: 5,
          title: 'Carpenter',
          img: 'https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F23.Carpentry%2Fcarpentry-2.jpg?alt=media&token=659243af-ec2b-4e08-9485-7d1519fb4b89'
        },
        {
          id: 6,
          title: 'Pest Control',
          img: 'https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F26.Pest%20Control%2Fpest-control-hubali3.jpg?alt=media&token=1220164a-89b2-433c-841a-76ad0808965e'
        },
        {
          id: 7,
          title: 'Packer & Mover',
          img : 'https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F72.Moving%20Home%2Fpackers-and-movers-pune.jpg?alt=media&token=ea8b25a3-c2ca-43d3-9036-cebb76eedbac'
        },
      ],
      // BeautySpa
      serv2: [
        {
          id: 1,
          title: 'Bridal Makeup',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F51.Bridal%20Makeup%2Fbridal-makeup_homebanner.jpg?alt=media&token=3d088564-b4ff-45ec-95a4-8601d12527bc"
        },
        {
          id: 2,
          title: 'Hairstyling',
          img: ""
        },
        {
          id: 3,
          title: 'Party Makeup',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F52.Party%20Makeup%2FHeader-1200x490.jpg?alt=media&token=56702d82-3a0d-48b0-ad0f-1bde95b9a195"
        },
        {
          id: 4,
          title: 'Others',
          img: ''
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
          title: 'Air Conditioner',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F11.Air%20conditioner%2Fpel-air-conditioners-top-banner.jpg?alt=media&token=dc0e9b2d-491d-4cfa-a405-0e9b56873f7e"
        }, 
        {
          id: 2,
          title: 'Fridge',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F12.Refrigerator%2Frefrigerator-700x350.jpg?alt=media&token=c87d3208-7255-4e13-bce5-d2f6623e44c4"
        },
        {
          id: 3,
          title: 'Washing Machine',
          img:"https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F13.washing%20Machine%2Fwashing%20machine.jpg?alt=media&token=b4f03ad5-47da-4a07-ab6e-277dac4c16d5"
        },
        {
          id: 4,
          title: 'Television',
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F14.Television%2Ffeatured-tv-home-theatre-setup.jpg?alt=media&token=a6d7a7d8-c2e1-4752-9608-3b1661d57a19"
        },
        {
          id: 5,
          title: 'DTH or Setup Box',
          img: 'https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F15.%20DTH%20or%20SETUP%20Box%2Fdth-250x250.jpg?alt=media&token=8a97d26c-657e-495c-b8b7-8a401ca515d8'
        },
        {
          id: 6,
          title: 'Water Purifier',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F16.Water%20Purifier%2Fmoonbow-blog-300-min.jpg?alt=media&token=867493b2-6ed9-4ae4-8212-a69745fb26eb"
        },
        {
          id: 7,
          title: 'Geyser',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F17.Geyser%2Fgeyser.jpg?alt=media&token=a86a3a2f-6429-4d28-90f2-e4f19db81324"
        },
        {
          id: 8,
          title: 'Microwave Oven',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F18.Microwave%20Oven%2Foven.jpg?alt=media&token=dac0ff21-6581-498d-9e7b-f5dc8bdd6979"
        },
      ],
      //cleaning
      serv4: [
        {
          id: 1,
          title: 'Dry Cleaning',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F41.Dry%20Cleaning%2Fdry%20cleaning.jpg?alt=media&token=512a3415-09ce-4866-b667-cc431d8643c2"
        },
        {
          id: 2,
          title: 'Home Deep Cleaning',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F42.Home%20Deep%20Cleaning%2Fdeep%20cleaning.jpg?alt=media&token=88ec78cd-6e65-4ea7-a814-bd896e453852"
        },
        {
          id: 3,
          title: 'Bathroom Cleaning',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F43.Bathroom%20Cleaning%2Fbathroom.jpg?alt=media&token=274df9ae-cc65-43c1-b860-e87ef7c4b23b"
        },
        {
          id: 4,
          title: 'Sofa Cleaning',
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F44.Sofa%20Cleaning%2Fsofa-cleaning.jpg?alt=media&token=6e844da9-d378-41cc-bd0c-b05acc8d8073"
        },
        {
          id: 5,
          title: 'Car Cleaning',
          img: 'https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F45.Car%20Cleaning%2Fcar.jpg?alt=media&token=8f57a476-81eb-4657-9dfe-bffe0e90a136'
        }
      ]
    };
  },
  methods: {
    requestCall(e) {
      e.preventDefault();
      if (!this.bName || !this.bPhone) {
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
          Address: `${this.bPlot}, ${this.bLocality}, ${this.bCity}, ${this.bPin},${this.bDate}, ${this.bSlot}`
        });
        // alert("Request sent Successful...");
        this.reqSent = true;
      }
    },
    addServices(serv) {
      this.bName = '';
      this.bPhone = '';
      this.bPlot = '';
      this.bPin = '';
      this.bLocality = '';
      this.reqSent = false;
      this.bServ = serv;
    }
  },
  
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
.Layout {
  background: rgb(236, 234, 234);
  margin-top: 3%;
}

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
  .Layout {
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
  height: 40px;
  width: 100%;
  margin: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}
.well .btn.btn-sm{
  height: 40px;
  width: 49%;
  margin-left: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .well input.btn.btn-lg {
    width: 100%;
  }
  .well .btn.btn-sm{
    width: 100%;
  }
}
</style>
