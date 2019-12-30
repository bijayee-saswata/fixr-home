<template>
    <footer id="dk-footer" class="dk-footer">
      <div class="container-fluid">
        <div class="row">
          
          <!-- End Col -->
          <div class="col-md-12 col-lg-12 col-xs-12" style="padding: 1%;">
              <div class="col-md-3 col-xs-6">
                <div class="contact-us">
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <a href="/" class="footer-logo"><span style="color: aqua;">F</span>ixr</a>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <div class="col-md-3 col-xs-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>Connect With Us</h3>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
              <div class="col-md-3 col-xs-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>Call Us</h3>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <div class="col-md-3 col-xs-6">
                <div class="contact-us">
                  <div class="contact-icon">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <h3>Write Us</h3>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
          </div>
          <!-- End Col -->
          
        </div>
        
      </div>
      <!-- End Contact Container -->

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <span>Copyright © 2019, All Right Reserved FiXR</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6 col-xs-12">
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
/* footer {
  margin-top: 3%;
} */
p {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.dk-footer {
  /* padding: 10px 0 0; */
  background-color: #151414;
  position: relative;
  z-index: 2;
}

.dk-footer .contact-us .contact-info {
  /* margin-left: 50px; */
  text-align: center;
}
@media (max-width:768px) {
   .dk-footer .contact-us .contact-info {
  margin-left: auto;
}
}

.dk-footer .contact-icon i {
  font-size: 1.5em;
  margin-right: 20px;
  /* top: -15px; */
  position: relative;
  color: var(--main-bg-color);
}

.dk-footer-box-info {
  background: #202020;
  padding: 40px;
  z-index: 2;
}




/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
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

.contact-info {
  /* margin-left: 75px; */
  color: #fff;
}
  .contact-info a{
    font-size: 1.8em;
    color: #fff;
    font-weight: 800;
    font-family: garamond;
    font-style: italic;
  }
.contact-info h3 {
  font-size: 1.5em;
  color: #fff;
  margin: 0;
  /* margin-bottom: 0; */
}

.copyright {
  padding: 10px 0;
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
@media (max-width: 768px) {
  footer {
    margin-top: 15%;
  }
  .contact-info h3 {
    font-size: 1em;
  }
  .contact-info a{
    font-size: 1.5em;
    color: #fff;
  }

}

</style>


