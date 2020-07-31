<template>
<main>
  <section id="appBanner">
      <div class="grid">
        <div class="appBannerText">
          <h2>Now get all the services at your fingertip</h2>
          <h4>Enter your mobile number to get the app download link</h4>
          <div class="appLink">
            <div class="sendLink">
              <input type="number" name="number" class="form-control" placeholder="10 digit number">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
            <span>or</span>
            <a href='https://play.google.com/store/apps/details?id=com.fixr.shopping_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
          </div>
        </div>
        <div class="appBannerImage">
          <img :src="appImage.i" alt="Mobile app">
        </div>
      </div>
    </section>

  <!-- quality -->
    <section class="quality slideanim">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-4" >
            <img src="../assets/why1.png" alt="Verified">
            <h3>Verified Professionals</h3>
          </div>
          <div class="col-md-4 col-xs-4 middle">
            <img src="../assets/why3.png" alt="Assurance">
            <h3>Rework Assurance</h3>
          </div>
          <div class="col-md-4 col-xs-4">
            <img src="../assets/why4.png" alt="Professional">
            <h3>Professional Support</h3>
          </div>
        </div>
      </div>
    </section>   
</main>
</template>

<script>
import {storage} from '../firebaseinit';
export default {
    name : "AppComponent",
    data(){
    return{
      appImage : ''
    }
  },
    created () {
      this.appImage = storage.ref().child('Imageforwebsite/0.homepage/3.homepage/Picture9.png').getDownloadURL();
    }
}
</script>

<style>

#appBanner {
  width: 80%;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.grid>.appBannerText {
  grid-column: 1/6;
  padding: 2em 0;
  align-self: center;
}
.appBannerText h2{
    font-weight: 600;
}
.appLink {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}
.appLink> a > img {
  object-fit: contain;
  max-width: 150px;
}
.sendLink {
  display: flex;
}
.grid>.appBannerImage {
  grid-column: 6/9;
}
.appBannerImage img{
  object-fit: contain;
  max-width: 28em;
}
@media (max-width:570px) {
  .appLink {
    display: block;
  }
  .grid>.appBannerText {
    grid-column: 1/9;
    padding: 2em 0;
    align-self: center;
  }
  .grid>.appBannerText> h2{
    font-size: 1.5em;
    font-weight: 600;
  }
   .grid>.appBannerText> h4{
    font-size: 1em;
    padding: 0.5em;
  }
  .grid>.appBannerImage {
    grid-column: 1/9;
  }
  .appBannerImage img{
  object-fit: contain;
  max-width: 20em;
}
}

@media (max-width:960px) {
    .appBannerImage img{
  object-fit: contain;
  max-width: 20em;
}
}


/* quality */
.quality .container {
  margin-top: var(--main-margin);
  margin-bottom: var(--main-margin);
  /* border-right: 1px groove lightgray;
  border-left: 1px groove lightgray; */
  text-align: center;
}
.quality .col-md-4 h3 {
  color: #000;
  font-weight: 500;
  font-size: 1.2em;
}
.quality img {
  max-height: 5em;
  object-fit: contain;
}
.quality .middle {
  border-left: 1px groove lightgray;
  border-right: 1px groove lightgray;
}
@media (max-width:760px) {
  .quality h3{
    font-size: 0.5em;
  }
}
</style>