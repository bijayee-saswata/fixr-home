<template>
  <div>
    <div class="container-fluid card">
      <div class="col-md-12 col-lg-12 col-xs-12">
        <div class="contact-heading">
          <img src="../assets/con.jpeg" alt="Contact Us">
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xs-12">
          <img src="../assets/contact.png" alt="Contact us">
      </div>
      <div class="col-md-6 col-lg-4 col-lg-offset-1 col-xs-12" id="formBox">
        <form name="contact">
          <div class="row">
            <h2>Send Us a Message</h2>
            <div class="col-sm-12 form-group">
              <input
                class="form-control"
                id="name"
                name="name"
                v-model="form.name"
                placeholder="Name"
                type="text"
                required
              />
            </div>
            <div class="col-sm-12 form-group">
              <input
                class="form-control"
                id="phNum"
                name="phone"
                placeholder="Phone No."
                v-model="form.phone"
                type="text"
                required
              />
            </div>
            <div class="col-sm-12 form-group">
              <select name="msgType" id="" class="form-control" v-model="form.msgType">
                <option value="Complaint">Complaint</option>
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
            placeholder="Message"
            rows="5"
          ></textarea>
          <br />
          <div class="row">
            <div class="col-sm-12 form-group">
              <button
                class="btn btn-primary"
                type="submit"
                @click.prevent="handleSubmit"
              >Send</button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import db from "../firebaseinit";
export default {
  name: "Contact",
  data() {
    return {
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
  }
};
</script>

<style scoped>
.card {
  padding: 3.5% 0 0 0;
  width: 80vw;
  margin-left: 10vw;
  
}
.col-md-12{
  padding: 0;
}
/* .card >.col-md-6 {
  margin: auto 0;
} */
.card >.col-md-6>img{
  width: 50%;
  margin-top: 5%;
  /* height: 50%; */
}
#formBox {
  /* background-color: rgb(226, 226, 226); */
  background-image: linear-gradient(var(--main-bg-color), rgb(110, 202, 255));
  padding: 2em;
  border-radius: 5%;
  box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.2);
  padding: 2% 3% 3% 3%;
  margin: var(--main-margin);
}
#formBox h2{
  padding-bottom: 3%;
  margin: 0%;
}
#formBox input{
  padding: 5%;
}
@media (max-width: 768px) {
  .card {
    padding-top: 20%;
  }
  #formBox{
    padding: 5%;
  }
  #formBox h2{
    font-size: 1.5em;
  }
  #formBox input{
  padding: 2%;
  margin: 0;
}
}
.btn{
  width: 100%;
  padding: 2%;
}
.contact-heading img{
  width: 100%;
  height: 40vh;
  padding: 0;
}
</style>
