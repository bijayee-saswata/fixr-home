<template>
  <main>
    <div id="contactBanner">
      <div class="contact-heading">
        <img src="../assets/con.jpeg" alt="Contact Us">
      </div>
    </div>
    
    <div class="container">
      <div class="col-md-4 col-lg-4 col-xs-12 call">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <h2>Call Us</h2>
        <h4>+91 9090022001</h4>
        <h4>+91 6370971229</h4>
      </div>
      <div class="col-md-4 col-lg-4 col-xs-12 email">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <h2>Write Us</h2>
        <h4>care@fixr.in</h4>
      </div>
      
      <div class="col-md-4 col-lg-4 col-xs-12" id="formBox">
        <h2>Send Us a Message</h2>
        <p v-if="err" style="color:red">Please fill required(*) form.</p>
        <form name="contact">
          <div class="row">
            <div class="col-sm-12 form-group">
              <input
                class="form-control"
                id="name"
                name="name"
                v-model="form.name"
                placeholder="*Name"
                type="text"
                required
              />
            </div>
            <div class="col-sm-12 form-group">
              <input
                class="form-control"
                id="phNum"
                name="phone"
                placeholder="*Phone No."
                v-model="form.phone"
                type="text"
                required
              />
            </div>
            <div class="col-sm-12 form-group">
              <select name="msgType" id="" class="form-control" v-model="form.msgType">
                <option value="Complaint">Customer Care</option>
                <option value="Partner">Be a Partner</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <textarea
            class="form-control"
            id="comments"
            v-model="form.message"
            name="message"
            placeholder="Message (optional)"
            rows="5"
          ></textarea>
          <br />
          <div class="row">
            <div class="col-sm-12 form-group">
              <button
                class="btn btn-primary"
                type="submit"
                @click.prevent="handleSubmit"
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <AppComponent/>
  </main>
</template>

<script>
import AppComponent from "./AppComponent";
import db from "../firebaseinit";
export default {
  name: "Contact",
  components : {
    AppComponent
  },
  data() {
    return {
      err: false,
      form: {
        name: "",
        phone: "",
        msgType: "Complaint",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      if(this.form.name && this.form.phone){
    db.collection("feedBacks").add({
          name: this.form.name,
          phone: this.form.phone,
          msgType: this.form.msgType,
          message: this.form.message
        })
        .then(() => {
          alert("Success!");
          this.form.name = "";
          this.form.phone = "";
          this.form.type = "Complaint";
          this.form.message = "";
        })
        .catch(error => alert(error));
    }
    else{
      this.err = true;
    }
    }
  }
};
</script>

<style scoped>
#contactBanner img {
  width: 100%;
  /* object-fit: contain; */
  height: 50vh;
}
.container {
  padding: 2em 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#formBox {
  /* background-color: rgb(226, 226, 226); */
  background-image: linear-gradient(var(--main-bg-color), rgb(110, 202, 255));
  /* padding: 2em; */
  border-radius: 5%;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
  /* padding: 2% 3% 3% 3%; */
  /* margin: var(--main-margin); */
}
.call i, .email i {
  font-size: 10em;
}
.call h2, .email h2 {
  font-weight: 600;
}
@media (max-width: 576px) {
  .container {
    display: block;
  }
}

</style>
