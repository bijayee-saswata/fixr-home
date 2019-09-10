<template>
    <footer id="dk-footer" class="dk-footer">
      <div class="container-fluid">
        <div class="row">
          
          <!-- End Col -->
          <div class="col-md-12 col-lg-12 col-xs-12">
            <div class="row">
              <div class="col-md-3">
                <div class="contact-us">
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <a href="/" class="footer-logo">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/fixr%20logo.png?alt=media&token=ff5a93a2-22bc-47cd-aa5f-e91a9d17d137"
                  width="50"
                  height="50"
                  alt="logo"
                />
              </a>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <div class="col-md-3">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-map-o" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>Bhubaneswar, Odisha</h3>
                    <p>India</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
              <div class="col-md-3">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>+91-6370971229</h3>
                    <p>Give a Call</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <div class="col-md-3">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>fixrglobal@gmail.com</h3>
                    <p>Write Us</p>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Row -->
          </div>
          <!-- End Col -->
          
        </div>
        <!-- End Widget Row -->
        <div class="footer-social-link">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
      </div>
      <!-- End Contact Container -->

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span>Copyright © 2019, All Right Reserved FiXR</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Copyright Container -->
      </div>
      <!-- End Copyright -->
      <!-- Back to top -->
      <div id="back-to-top" class="back-to-top">
        <button class="btn btn-success" title="Back to Top" style="display: block;">
          <a href="#top">
            <i class="fa fa-angle-up"></i>
          </a>
        </button>
      </div>
      <!-- End Back to top -->
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  margin-top: 3%;
}
p {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.dk-footer {
  padding: 10px 0 0;
  background-color: #151414;
  position: relative;
  z-index: 2;
}
/* .dk-footer .contact-us {
  margin-top: 0;
  margin-bottom: 15px;
  padding-left: 40px;
} */
.dk-footer .contact-us .contact-info {
  /* margin-left: 50px; */
  text-align: center;
}
@media (max-width:768px) {
   .dk-footer .contact-us .contact-info {
  margin-left: auto;
}
}
/* .dk-footer .contact-us.contact-us-last {
  margin-left: -80px;
} */
.dk-footer .contact-icon i {
  font-size: 1.5em;
  margin-right: 20px;
  top: -15px;
  position: relative;
  color: var(--main-bg-color);
}

.dk-footer-box-info {
  background: #202020;
  padding: 40px;
  z-index: 2;
}

.footer-social-link ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.footer-social-link li {
  display: inline-block;
}
.footer-social-link a i {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  background: #000;
  margin-right: 5px;
  color: var(--main-bg-color);
}

.footer-info-text {
  margin: 26px 0 32px;
  color: lightgoldenrodyellow;
}


@media (max-width: 768px) {
  footer {
    margin-top: 15%;
  }
}

/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 5%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
}

/* .contact-icon {
  position: absolute;
}
.contact-icon i {
  font-size: 36px;
  top: -5px;
  position: relative;
  color: #007bff;
} */

.contact-info {
  /* margin-left: 75px; */
  color: #fff;
}


.contact-info h3 {
  font-size: 20px;
  color: #fff;
  margin: 0;
  /* margin-bottom: 0; */
}

.copyright {
  padding: 28px 0;
  margin-top: 30px;
  background-color: #202020;
}
.copyright span,
.copyright a {
  color: #878787;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.copyright a:hover {
  color: #007bff;
}

.copyright-menu ul {
  text-align: right;
  margin: 0;
}

.copyright-menu li {
  display: inline-block;
  padding-left: 20px;
}

.back-to-top {
  position: relative;
  z-index: 2;
}
.back-to-top .btn-success {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-color: #fff;
  background-color:var(--main-bg-color);
  display: none;
  z-index: 999;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.back-to-top .btn-success a i {
  color: #fff;
  font-size: 1.3em;
  font-weight: bolder;
}
.back-to-top .btn-success:hover {
  cursor: pointer;
  background: #fa6742;
  border-color: #fa6742;
}
.contact {
  color: #878787;
  cursor: pointer;
}
.contact-heading {
  margin: 5%;
  color: var(--main-txt-color);
}

</style>


