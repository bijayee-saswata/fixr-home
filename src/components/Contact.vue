<template>
  <main>
    <div id="contactBanner">
      <div class="contact-heading">
        <img src="../assets/contact.png" alt="Contact Us" />
      </div>
    </div>
    <div class="flex">
      <div class="call">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <h2>Call Us</h2>
        <h4>+91 9090022001</h4>
        <h4>+91 6370971229</h4>
      </div>
      <div class="email">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <h2>Write Us</h2>
        <h4>care@fixr.in</h4>
      </div>

      <div class="SMS" id="formBox">
        <h2>Send Us a Message</h2>
        <p v-if="err" style="color:red">Please fill required(*) form.</p>
        <form name="contact">
          <input
            class="form-control"
            name="name"
            v-model="form.name"
            placeholder="*Name"
            type="text"
            required
          />
          <input
            class="form-control"
            name="phone"
            placeholder="*Phone No."
            v-model="form.phone"
            type="text"
            required
          />
          <select name="msgType" class="form-control" v-model="form.msgType">
            <option value="Complaint">Customer Care</option>
            <option value="Partner">Be a Partner</option>
            <option value="Others">Others</option>
          </select>
          <textarea
            class="form-control"
            v-model="form.message"
            name="message"
            placeholder="Message (optional)"
            rows="5"
          ></textarea>
          <br />
          <button class="btn btn-primary" type="submit" @click.prevent="handleSubmit">Submit</button>
        </form>
      </div>
    </div>

    <AppComponent />
  </main>
</template>

<script>
import AppComponent from "./AppComponent";
import firebase from "firebase";
import { db } from "../firebaseinit";
export default {
  name: "Contact",
  components: {
    AppComponent
  },
  data() {
    return {
      err: false,
      loading: true,
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
      if (this.form.name && this.form.phone) {
        db.collection("feedBacks")
          .add({
            name: this.form.name,
            phone: this.form.phone,
            msgType: this.form.msgType,
            message: this.form.message,
            createdDate: firebase.firestore.FieldValue.serverTimestamp(),
            status: "issue"
          })
          .then(() => {
            alert("Success!");
            this.form.name = "";
            this.form.phone = "";
            this.form.type = "Complaint";
            this.form.message = "";
          })
          .catch(error => alert(error));
      } else {
        this.err = true;
      }
    }
  }
};
</script>

<style scoped>
#contactBanner img {
  width: 100%;
  height: 50vh;
  object-fit: fill;
}
.flex {
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
.call {
  width: 100%;
}
.email {
  width: 100%;
}
.SMS {
  width: 100%;
  background-image: linear-gradient(rgb(51, 0, 85), rgb(208, 126, 255));
  border-radius: 5%;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
}
.SMS h2 {
  color: #fafafa;
  font-size: 1.5em;
  padding: 10px;
  margin: 0;
}
.call i,
.email i {
  font-size: 10em;
  max-width: 10em;
  color: purple;
}
.call h2,
.email h2 {
  font-weight: 600;
}
input,
textarea,
select {
  margin: 10px 0;
}
form {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
}
@media (max-width: 576px) {
  .flex {
    display: block;
  }
  #contactBanner img {
    width: 100%;
    height: auto;
    object-fit: contain !important;
  }
  .call i,
  .email i {
    font-size: 8em;
  }
}
.fa-spinner {
  color: var(--main-bg-color);
}
</style>
