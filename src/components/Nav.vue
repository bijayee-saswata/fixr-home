<template>
    <nav class="navbar navbar-default">
      <div class="nLayout">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="logo">
            <img id="logo"
              src="../assets/Mrfixr.png"
              alt="logoText"
            />
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <!-- <li class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
            </li> -->
              <li>
              <router-link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home </router-link>
            </li>
            <li>
              <router-link to="/services"><i class="fa fa-snowflake-o" aria-hidden="true"></i> Services</router-link>
            </li>
            <li>
              <router-link to="/contact"><i class="fa fa-address-book-o" aria-hidden="true"></i> Contact</router-link>
            </li>
            <li class="dropdown this-works">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Callback 
              <b class="caret"></b></a>
            <div class="dropdown-menu dropdown-form">
              <p v-if="err" style="color: red">* Please fill all the fields.</p>
              <p v-if="sent" style="padding: 10px;">We will reach to you soon. :)</p>
              <form class="form-inline" role="form" v-if="!sent">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="name" placeholder="*Name"
                    >
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="phone" placeholder="*Phone"
                    >
                </div>
                
                  <button type="button" @click.prevent="handle" class="block">Send</button>
                
              </form>
            </div>
            </li>
           
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
      <!-- Modal -->

    </nav>

</template>

<script>
import {db} from "../firebaseinit";
export default {
  name: "Nav",
  data(){
    return{
      name: "",
      phone: null,
      sent: false,
      err: false
    }
  },
  methods : {
    handle(){
      if(this.name && this.phone){
        db.collection("phoneCalls").add({
          name: this.name,
          phone: this.phone,
          
        })
        .then(() => {
          this.sent = true;
          this.name = "";
          this.phone = "";
       
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
nav {
  position: sticky;
  top: 0;
  background:#fff;
  width: 100%;
  z-index: 20;
  margin: 0;
  height: 60px;
}

.nLayout{
  width: 80%;
  margin-left: 10%;
}
.navbar{
  border: 0;
  border-radius: 0;
}
.navbar-header a{
  font-family: garamond;
  font-style: italic;
  margin: 0;
  font-size: 1.8em;
  font-weight: bolder;
}
.navbar-header img {
  max-height: 60px;
  object-fit: contain;
}
.navbar-brand{
  float: none;
  display: flex;
  align-items: center;
}
.navbar-default{
  border-color: transparent;
}
.navbar-default .navbar-brand{
  color: #fff;
}

.navbar-default .navbar-nav > li > a{
  font-size: 1em;
  font-weight: 600;
  color:#000;
}
nav a:hover {
  color: #000;
  background-color: #e7e7e7 !important;
} 

.navbar-toggle {
  margin-right: 0;
}

@media (max-width:760px) {
  #navbar-collapse{
    height:auto;
    background-color: #fff;
    width: 100%;
  }
  .navbar-header img {
    max-height: 30px;
    object-fit: contain;
}
.navbar-brand {
  padding: 0;
}
}
 input{
	position: relative;
	width: 100%;
	border: none;
    outline: none;
    font-size: 1em;
    border-bottom: 1px solid rgba(0, 89, 255, 0.5);
}

.block {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color:var(--main-bg-color);;
  cursor: pointer;
  color: #fff;
  margin-top: 5px; 
  text-align: center;
}
.dropdown-form{
  padding: 2em;
  background-color: #ccc !important;
}
.dropdown-form .form-group{
  margin : 5px 0 5px 0;
}
 /* .searchbar{
    margin-top: 5px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: #fff;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 250px;
    border-radius: 40px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }
    @media (max-width:760px) {
       .searchbar> .search_input{
    padding: 0 10px;
    width: 250px;
    border-radius: 40px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar> .search_icon{
    background: white;
    color: #e74c3c;
    }

    } */
</style>
