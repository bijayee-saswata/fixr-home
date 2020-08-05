<template>
  <section id="serviceDescription">
    <div class="content" v-if="isLoaded">
      <div class="grid">
        <div class="serviceImage">
          <img :src="image" :alt="slug" />
          <div class="price">
            <span>Price start at: ₹ {{ price }}*</span>
            <button
              class="btn btn-success"
              data-toggle="modal"
              data-target="#modal"
              @click="addServices()"
              v-if="loggedIn"
            >Order Now</button>
            <span v-if="!loggedIn">Sign In To Order</span>
          </div>
        </div>
        <div class="serviceText panel panel-default">
          <h2>{{ slug }}</h2>
          <div class="description">
            <h3>Product Description</h3>
            <ul>
              <li v-for="(desc, index) in descList" :key="index">{{ desc }}</li>
            </ul>
          </div>
          <div class="prov">
            <h3>Why Choose Us?</h3>
            <ul>
              <li v-for="(prov, index) in provList" :key="index">{{ prov }}</li>
            </ul>
          </div>
          <div class="tnc">
            <h3>Term and Conditions</h3>
            <ul>
              <li v-for="(tnc, index) in tncList" :key="index">{{ tnc }}</li>
            </ul>
          </div>
        </div>
      </div>

      <AppComponent />

      <!-- <Modal /> -->
      <div
        class="modal"
        id="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLongTitle">Order Details</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="onlineReq">
                <div class="well">
                  <div v-if="reqSent" style="color: green">
                    <i class="fa fa-check-circle-o fa-3x" aria-hidden="true"></i>
                    <h2>Order Successful.</h2>
                    <h4>You will receive a callback from us soon. &#x1F60A;</h4>
                    <p>
                      <b>Transaction Id: {{ txnId }}</b>
                    </p>
                  </div>
                  <form action="#" v-else>
                    <p v-if="error" style="color:red;">{{ errorMsg }}</p>
                    <div class="input-group">
                      <input
                        class="btn btn-lg"
                        name="bServ"
                        v-model="slug"
                        type="text"
                        placeholder="Your Service"
                        required
                        disabled
                      />
                      <input
                        class="btn btn-lg"
                        name="bName"
                        v-model="bName"
                        type="text"
                        placeholder="Name"
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bPhone"
                        v-model="bPhone"
                        type="number"
                        placeholder="Mobile Number"
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bPlot"
                        v-model="bPlot"
                        type="text"
                        placeholder="Plot No."
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bLocality"
                        v-model="bLocality"
                        type="text"
                        placeholder="Locality"
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bCity"
                        v-model="bCity"
                        type="text"
                        disabled
                        required
                      />
                      <input
                        class="btn btn-lg"
                        name="bPin"
                        v-model="bPin"
                        placeholder="Pin Code"
                        type="text"
                        required
                      />
                      <div>
                        <input type="date" class="btn btn-sm" name="date" v-model="bDate" required />
                        <select name="slot" v-model="bSlot" class="btn btn-sm">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button
                type="button"
                class="btn btn-success"
                v-if="!reqSent"
                @click="requestCall"
              >Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper" v-else>
      <i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import { db, auth } from "../firebaseinit";
import AppComponent from "./AppComponent";
export default {
  name: "ServiceDescription",
  props: {
    slug: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      required: true
    }
  },
  components: {
    AppComponent
  },
  data() {
    return {
      isLoaded: false,
      loggedIn: false,
      status: true,
      image: "",
      description: "",
      prov: "",
      tnc: "",
      descList: [],
      provList: [],
      tncList: [],
      price: null,
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
      error: false,
      txnId: null,
      errorMsg: ""
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
        const data = {
          userId: auth.currentUser.uid,
          serviceAddress: {
            name: this.bName,
            phone: this.bPhone,
            pincode: this.bPin,
            locality: this.bLocality,
            areaAndStreet: this.bPlot
          },
          serviceDateandTime: `${this.bDate} (${this.bSlot})`,
          serviceDetails: {
            name: this.slug,
            price: this.price,
            img: this.image
          },
          transactionDate: firebase.firestore.FieldValue.serverTimestamp(),
          responseStatus: "none",
          paymentMode: "COD"
        };
        db.collection("Orders")
          .add(data)
          .then(ref => {
            this.txnId = ref.id;
            this.reqSent = true;
          })
          .catch(err => {
            this.error = true;
            this.errorMsg = err;
          });
      }
    },
    addServices() {
      this.bName = "";
      this.bPhone = "";
      this.bPlot = "";
      this.bPin = "";
      this.bLocality = "";
      this.reqSent = false;

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
  created() {
    db.collection("ServiceTypes")
      .doc(this.parent)
      .collection("sub")
      .doc(this.slug)
      .get()
      .then(doc => {
        this.image = doc.data().weburl;
        this.status = doc.data().status;
        this.description = doc.data().desc;
        this.prov = doc.data().prov;
        this.price = doc.data().price;
        this.tnc = doc.data().tanc;

        this.descList = this.description.split(/[.]+/);
        this.provList = this.prov.split(/[.]+/);
        this.tncList = this.tnc.split(/[.]+/);
        this.isLoaded = true;
      })
      .catch(err => console.log(err));
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
};
</script>

<style>
#serviceDescription {
  width: 80%;
  margin: 1% auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1fr, 8);
}
.serviceImage {
  grid-column: 1/5;
  align-self: center;
}
.serviceImage img {
  max-width: 500px;
  object-fit: contain;
}
.price {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
.serviceText {
  grid-column: 5/9;
  padding: 20px 50px;
  text-align: left;
}
.serviceText h2 {
  text-align: center;
  font-weight: 600;
}

ul {
  list-style-type: none;
}
li::before {
  font-family: "FontAwesome";
  margin: 0 5px 0 -15px;
  color: green;
}
.description li::before {
  content: "\f02b";
}
.prov li:before {
  content: "\f05d";
}
.tnc li:before {
  content: "\f05a";
}
.modal-body {
  width: 90%;
}

@media (max-width: 570px) {
  #serviceDescription {
    width: 100%;
  }
  .grid {
    display: block;
  }
  .serviceImage img {
    max-width: 300px;
  }
}
/* modal input */
.well input.btn.btn-lg {
  height: 40px;
  width: 100%;
  margin: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}
.well .btn.btn-sm {
  height: 40px;
  width: 49%;
  margin-left: 1%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: 2%;
  box-sizing: border-box;
}

.modal-footer {
  text-align: center;
}

@media (max-width: 768px) {
  .well input.btn.btn-lg {
    width: 100%;
  }
  .well .btn.btn-sm {
    width: 100%;
  }
}
/* progress */
.wrapper {
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa-spinner {
  color: var(--main-bg-color);
}
</style>
