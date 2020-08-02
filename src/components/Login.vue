<template>
  <div
    class="modal"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginModalTitle"
    aria-hidden="true"
    data-backdrop="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLongTitle" v-if="!loggedIn">Sign In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="mobileInput">
            <div class="icon">
              <i class="fa fa-mobile fa-4x" aria-hidden="true" v-if="!loggedIn"></i>
              <i class="fa fa-check-circle-o fa-4x" aria-hidden="true" v-if="loggedIn"></i>
            </div>
            <div class="inputField" v-if="!smsSent && !loggedIn">
              <div class="userName">
                <span>
                  <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </span>
                <input type="text" v-model="userName" name="username" placeholder="Enter username" />
              </div>
              <div class="phoneInput">
                <span>{{ countryCode }}</span>
                <input
                  type="number"
                  name="phonenum"
                  placeholder="Enter Mobile Number"
                  v-model="phoneNum"
                />
              </div>
            </div>
            <div class="verification" v-if="smsSent && !loggedIn">
              <input type="number" v-model="otp" placeholder="Enter OTP" />
            </div>
            <div class="verification" v-if="loggedIn">verification Successful.</div>
          </div>
        </div>
        <div class="modal-footer">
          <div id="recaptcha-container"></div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="onSignInSubmit"
            v-if="!smsSent"
          >Get OTP</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="verifyCode"
            v-if="smsSent && !loggedIn"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db, auth } from "../firebaseinit";
export default {
  name: "Login",
  data() {
    return {
      loggedIn: false,
      smsSent: false,
      phoneNum: null,
      userName: null,
      countryCode: "+91",
      otp: null
    };
  },
  methods: {
    onSignInSubmit(e) {
      e.preventDefault();
      var appVerifier = window.recaptchaVerifier;
      auth
        .signInWithPhoneNumber(`+91${this.phoneNum}`, appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          this.smsSent = true;
        })
        .catch(error => {
          alert(error);
        });
    },
    verifyCode() {
      var code = this.otp;
      window.confirmationResult
        .confirm(code)
        .then(result => {
          var user = result.user;
          if (user) {
            this.loggedIn = true;

            db.collection("users")
              .doc(user.uid)
              .get()
              .then(doc => {
                if (!doc.exists) {
                  db.collection("users")
                    .doc(user.uid)
                    .set({
                      name: this.userName,
                      phone: `+91${this.phoneNum}`
                    });
                }
              });
            if (!user.displayName) {
              user.updateProfile({
                displayName: this.userName
              });
            }
          }
          // ...
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  mounted() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible"
        }
      );
      window.recaptchaVerifier.render();
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
        this.smsSent = false;
        this.phoneNum = "";
        this.otp = "";
      }
    });
  }
};
</script>

<style>
.modal {
  z-index: 1000;
}
.modal-body {
  width: 80%;
  margin: 0 auto;
}
.icon {
  padding: 20px;
}
.phoneInput,
.userName {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.inputField span {
  padding: 10px 0;
  background-color: #ccc;
  width: 40px;
}
.inputField input {
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid red;
  width: 80%;
}
.modal-footer {
  text-align: center;
}
.grecaptcha-badge {
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
