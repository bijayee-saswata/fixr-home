<template>
    <footer id="dk-footer" class="dk-footer">
      <div class="container-fluid">
        <div class="row">
          
          <!-- End Col -->
          <div class="col-md-12 col-lg-12 col-xs-12" style="padding: 1%;">
              <div class="col-md-4 col-xs-12">
                <div class="contact-us">
                  <!-- End contact Icon -->
                  <div class="contact-info">
                    <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/services">Services</router-link></li>
                      <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                  </div>
                  <!-- End Contact Info -->
                </div>
                <!-- End Contact Us -->
              </div>
              <!-- End Col -->
              <div class="col-md-4 col-xs-6">
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
              <div class="col-md-4 col-xs-6">
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
              <span>Copyright © 2020, All Right Reserved Fixr.</span>
            </div>
            <!-- End Col -->
            <div class="col-md-6 col-xs-12">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
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
.contact-info ul{
  list-style: none;
  font-size: 1em;
}
.contact-info ul li{
  display: inline-block;
  padding-right:2em; 
}
  .contact-info a{
    color: #fff;
    font-weight: 600;
  }
.contact-info h3 {
  font-size: 1.2em;
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

.contact-heading {
  margin: 5%;
  color: var(--main-txt-color);
}
@media (max-width: 768px) {
  .contact-info h3 {
    font-size: 1em;
  }
  .contact-info ul{
    padding: 0;
    font-size: 0.8em;
  }
  .contact-info {
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
  }

}

</style>


