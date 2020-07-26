<template>
  <main class="Layout" id="top">
    <section class="sLayout">
      <img src="../assets/sbg.jpeg" alt />
        <!-- <h2>Flat 10% off</h2> -->
      <!-- <div class="text">
      </div> -->
    </section>

  <!-- cleaning -->
    <section id="Cleaning" class="box">
      <h3>Cleaning</h3>
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

     <!-- corporate -->
    <section id="CorporateServices" class="box">
      <h3>Corporate Service</h3>
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
        <!-- Electronic Gadget -->
    <section id="Electronics&IT" class="box">
      <h3>Electronics & IT</h3>
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

    <!-- Appliances-->
    <section id="HomeAppliance" class="box">
      <h3>Home Appliances</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv5"
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

    <!-- beauty & spa -->
    <section id="Makeup&Hairstyle" class="box">
      <h3>Makeup & Hairstyle</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv6"
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
    
        <!-- Packers Mover -->
    <section id="Packers&Movers" class="box">
      <h3>Packer & Mover</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv7"
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
    <section id="Repairing&Renovation" class="box">
      <h3>Repairing & Renovation</h3>
      <div>
        <div class="main">
          <div class="slider-nav">
            <div
              class="house"
              v-for="serv in  serv8"
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
                  >Your resonse has been submitted. You will receive a callback from us soon. :) <p><b>Transaction Id: {{txnId}}</b></p></div>
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
                        type="number"
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
                        <input type="date" class="btn btn-sm" name="date" id="datepicker" v-model="bDate" required>
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
    <AppComponent/>
  </main>
</template>

<script>
//import allServices from './allServices'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import db from "../firebaseinit";
import AppComponent from "./AppComponent";
export default {
  name: "Services",
  components : {
    AppComponent
  },
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
      txnId : null,
      errorMsg: "",
      d : {
            msg: ""
          },
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
      // Cleaning
      serv1: [
        {
          id: 1,
          title: "Bathroom Cleaning",
          status: true,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F43.Bathroom%20Cleaning%2Fbathroom.jpg?alt=media&token=274df9ae-cc65-43c1-b860-e87ef7c4b23b"
        },
        {
          id: 2,
          title: "Car Cleaning",
          status: true,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F45.Car%20Cleaning%2Fcar.jpg?alt=media&token=8f57a476-81eb-4657-9dfe-bffe0e90a136"
        },
        {
          id: 3,
          title: "Dry Cleaning",
          status: true,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F41.Dry%20Cleaning%2Fdry%20cleaning.jpg?alt=media&token=512a3415-09ce-4866-b667-cc431d8643c2"
        },
        {
          id: 4,
          title: "Home Deep Cleaning",
          status: true,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F42.Home%20Deep%20Cleaning%2Fdeep%20cleaning.jpg?alt=media&token=88ec78cd-6e65-4ea7-a814-bd896e453852"
        },
        {
          id: 5,
          title: "Sofa Cleaning",
          status: true,
          img: "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F44.Sofa%20Cleaning%2Fsofa-cleaning.jpg?alt=media&token=6e844da9-d378-41cc-bd0c-b05acc8d8073"
        }
      ],
    // HomeRenovation
      serv0: [
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
      // Corporate
      serv2: [
        {
          id: 1,
          status : true,
          title : "Annual Maintenance",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F83.Annual%20Maintenance%2Fhandyman-background_crop.jpg?alt=media&token=519cb1cb-98b9-45ae-8bce-687c34c87ba6"
        },
        {
          id: 2,
          status : true,
          title : "Biometric & Access Control",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F81.BIOMETRIC%20%26%20Access%20Control%2Faccess-control-e1557394283191.jpg?alt=media&token=519b4a3e-5aae-4d89-b46b-0632ffc2a19f"
        },
        {
          id: 3,
          status : true,
          title : "CCTV",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F82.CCTV%20Camera%2Finstalling-security-cameras.jpg?alt=media&token=226d2d81-e8ba-44f3-84ba-d348f485cd98"
        },
        {
          id: 4,
          status : true,
          title : "Event Management",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F84.Event%20Management%2Fconference-hall.jpg?alt=media&token=a9de1daf-21ef-426b-b0d7-413106539714"
        },
        {
          id: 5,
          status : true,
          title : "Food Catering",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F85.Food%20Catering%2FChoose-a-Good-Wedding-Catering-Service-20190731070805.2892950015.jpg?alt=media&token=97dbb6e3-3f70-4f39-9c2c-b988106e1e5f"
        },
        {
          id: 6,
          status : true,
          title : "Security Service",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F86.Security%20Service%2Fsecurity.jpg?alt=media&token=654214c4-3dca-43e7-8fd6-6bce4b050f74"
        }
      ],
      //Electronics
      serv3: [
        {
          id: 1,
          status : true,
          title : "Biometric & Access Control",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F81.BIOMETRIC%20%26%20Access%20Control%2Faccess-control-e1557394283191.jpg?alt=media&token=519b4a3e-5aae-4d89-b46b-0632ffc2a19f"
        },
        {
          id: 2,
          status : true,
          title : "CCTV",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F36.CCTV%20Camera%2FFire-Alarm-Systems-Edinburgh2-16-9.jpg?alt=media&token=330872b4-9a52-46ca-9498-23f1e86dc529"
        },
        {
          id: 3,
          status : true,
          title : "DTH or SETUP Box",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F34.DTH%20or%20SETUP%20BOX%2Fdth-250x250.jpg?alt=media&token=7bd5ee1e-7872-4c33-a166-9202a34dcd45"
        },
        {
          id: 4,
          status : true,
          title : "Laptop & PC Repair",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F31.Laptop%20%26%20PC%20Repair%2Flaptop.jpg?alt=media&token=1c06fe84-b7dd-4c35-ab36-47407043f1f4"
        },
        {
          id: 5,
          status : true,
          title : "Mobile & Tablet",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F32.Mobile%20%26%20Tablet%2Fsmart-phone-repair-training-course-service-500x500.png?alt=media&token=7dab9600-4dd3-4d0a-a6d7-49e8a34069bb"
        },
        {
          id: 6,
          status : true,
          title : "Television",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F33.Television%2FoMcP5vi6Tjt2Ecq3v53zPi.jpg?alt=media&token=6f9000d2-d332-48ba-a54c-70a9e4be9a4a"
        }
      ],
      //event
      serv4: [
        {
          id: 1,
          status : true,
          title : "Birthday Party",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F61.Birthday%20Party%2Fbday.jpg?alt=media&token=d3e260ec-8a80-49cd-840f-19bbe256a922"
        },
        {
          id: 2,
          status : true,
          title : "Food Catering",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F63.Food%20Catering%2Fsoulcare-event-catering-services.jpg?alt=media&token=45a0eeb2-a0b8-4fab-9dc8-c5c20d767839"
        },
        {
          id: 3,
          status : true,
          title : "Wedding Party",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F62.Wedding%20Party%2Fparty.jpg?alt=media&token=203a1e10-c70c-470d-9300-008d4fcbeaab"
        },
        {
          id: 4,
          status : true,
          title : "Wedding Photographer",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F64.Wedding%20Photographer%2Fphotographer-1024x682.jpg?alt=media&token=e3bb8bb9-6ab7-4282-bf9a-a7a953051243"
        }
      ],
      //appliances
      serv5: [
        {
          id: 1,
          status : true,
          title : "Air Conditioner",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F11.Air%20conditioner%2Fpel-air-conditioners-top-banner.jpg?alt=media&token=28bf29a3-23e7-4917-b770-51b2500dd079"
        },
        {
          id: 2,
          status : true,
          title : "DTH or SETUP Box",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F15.%20DTH%20or%20SETUP%20Box%2Fdth-250x250.jpg?alt=media&token=8a97d26c-657e-495c-b8b7-8a401ca515d8"
        },
        {
          id: 3,
          status : true,
          title : "Geyser",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F17.Geyser%2Fgeyser.jpg?alt=media&token=a86a3a2f-6429-4d28-90f2-e4f19db81324"
        },
        {
          id: 4,
          status : true,
          title : "Microwave oven",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F18.Microwave%20Oven%2Foven.jpg?alt=media&token=dac0ff21-6581-498d-9e7b-f5dc8bdd6979"
        },
        {
          id: 5,
          status : true,
          title : "Refrigerator",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F12.Refrigerator%2Frefrigerator-700x350.jpg?alt=media&token=c87d3208-7255-4e13-bce5-d2f6623e44c4"
        },
        {
          id: 6,
          status : true,
          title : "Television",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F14.Television%2Ffeatured-tv-home-theatre-setup.jpg?alt=media&token=a6d7a7d8-c2e1-4752-9608-3b1661d57a19"
        },
        {
          id: 7,
          status : true,
          title : "Washing Machine",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F13.washing%20Machine%2Fwashing%20machine.jpg?alt=media&token=b4f03ad5-47da-4a07-ab6e-277dac4c16d5"
        },
        {
          id: 8,
          status : true,
          title : "Water Purifier",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F16.Water%20Purifier%2Fmoonbow-blog-300-min.jpg?alt=media&token=867493b2-6ed9-4ae4-8212-a69745fb26eb"
        }
      ],
      //makeup
      serv6: [
        {
          id : 1,
          status : true,
          title : "Bridal Makeup",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F51.Bridal%20Makeup%2Fbridal-makeup_homebanner.jpg?alt=media&token=f08e2517-9d07-41c1-9385-e7a15b2fb23d"
        },
        {
          id : 2,
          status : true,
          title : "Makeup & Hairstyling",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F52.Party%20Makeup%2FHeader-1200x490.jpg?alt=media&token=bb2f63a8-850f-48da-9c3b-f9a4c48f042f"
        },
        {
          id : 3,
          status : true,
          title : "Others",
          img : ""
        },
        {
          id : 4,
          status : true,
          title : "Help",
          img : ""
        },
      ],
      //packer
      serv7: [
        {
          id : 1,
          status : true,
          title : "Commercial Transport",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F71.Commercial%20Transport%2Ftransport.jpg?alt=media&token=9556e6eb-b11c-4986-aeac-0ad348fb2707"
        },
        {
          id : 2,
          status : true,
          title : "Moving Home",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F72.Moving%20Home%2Fpackers-and-movers-pune.jpg?alt=media&token=e2122ef9-33ea-4004-bde9-29a986cc0c31"
        },
        {
          id : 3,
          status : true,
          title : "Others",
          img : ""
        },
        {
          id : 4,
          status : true,
          title : "Help",
          img : ""
        },
      ],
      //repairing
      serv8: [
        {
          id : 1,
          status : true,
          title : "Carpentery",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F23.Carpentry%2Fcarpentry-2.jpg?alt=media&token=659243af-ec2b-4e08-9485-7d1519fb4b89"
        },
        {
          id : 2,
          status : true,
          title : "Electrical",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F21.Electrical%2Fselection-314-500x500.png?alt=media&token=12396581-8089-4416-86a2-3330f0692aea"
        },
        {
          id : 3,
          status : true,
          title : "Interior Design",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F25.Interior%20Design%2Fslide1.jpg?alt=media&token=d3fcfbc3-8f94-46a7-a76d-4e8239290973"
        },
        {
          id : 4,
          status : true,
          title : "Painting",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F24.Painting%2Fabirchcreekinn-paint.jpg?alt=media&token=0e8ac13c-0170-4168-9fd9-b70e17dfe255"
        },
        {
          id : 5,
          status : true,
          title : "Pest Control",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F26.Pest%20Control%2Fimages.jpg?alt=media&token=e6303098-55e3-46a8-8a27-4c9b270b9017"
        },
        {
          id : 6,
          status : true,
          title : "Plumbing",
          img : "https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/images%2F22.Plumbing%2F4Q2EYRR2XMI6TMIL6BNCFZ2YMU.jpg?alt=media&token=5556ea1c-6996-4c89-8ecc-9305e5367b80"
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
          address: `${this.bPlot}, ${this.bLocality}, ${this.bCity}, ${this.bPin}`,
          dateTime: `${this.bDate}, ${this.bSlot}`,
          responseStatus : 'none',
          price : 0
        }).then(ref =>{
          this.txnId = ref.id;
          this.reqSent = true;
       
            //sms
            /* eslint-disable */ 
            this.d.msg =  `Order successful. Your transaction id is ${this.txnId}`;
            this.d.msg = encodeURIComponent(this.d.msg.trim());
            $.ajax({
                method: 'GET',
                dataType: 'jsonp',
                url: `https://getwaysms.com/vendorsms/pushsms.aspx?user=bulk1234&password=bulk1234&msisdn=${this.bPhone}&sid=SIGNUP&msg=${this.d.msg}&fl=0&gwid=2`,
                success: 'Success'
              })
        })
        .catch(err => {
          this.error = true;
          this.errorMsg = err;
        });
        // alert("Request sent Successful...");
       
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
  
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;

      let today = year + "-" + month + "-" + day;


      this.bDate = today;
    }
  },
  
  mounted() {
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
  created(){
    //cleaning

    //   db.collection("ServiceTypes").doc(`Cleaning`).collection("sub").get().then((docs)=>{
    //     docs.forEach(element => {
    //       let data = {
    //         id : element.id,
    //         status : element.data().status,
    //         url : element.data().url
    //       }
    //       this.serv3.push(data); 
    //       //console.log(data);   
    //     });
    // })
    
  }
};
</script>

<style scoped>

.sLayout img{
  width: 100%;
  height: 50vh;
  /* object-fit: contain; */
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
  margin-right: 10px;
  height: 12em;
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
