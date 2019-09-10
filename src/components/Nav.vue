<template>
  <section class="site">
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
          <a class="navbar-brand" href="/" style="color: black;">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/fixr%20logo.png?alt=media&token=ff5a93a2-22bc-47cd-aa5f-e91a9d17d137"
              alt="logo"
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
              <router-link to="/">Home </router-link>
            </li>
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <a href="#"><i class="fa fa-phone" aria-hidden="true" ></i>+91-6370971229</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>
  </section>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>

.site nav {
  position: fixed;
  padding: 0.3em 0 0.3em 0;
  top: 0;
  background:var(--main-bg-color);
  width: 100%;
  text-transform: uppercase;
  z-index: 20;
}
.site .nLayout{
  width: 80%;
  margin-left: 10%;
}
.site .navbar-brand{
  /* filter: invert(3); */
   padding: 0;
   margin: 0;
}

.site .navbar-brand img{
  width: 90px;
  height: 60px;
}
.site nav a{
  color: var(--main-txt-color);
  font-size: 1.2em;
  font-weight: 600;
}
.site nav a:hover {
  /* border-bottom: 2px solid #000; */
  color:#ccc;
} 
@media (max-width:760px) {
  #navbar-collapse{
    height:100vh;
    /* width: 50vw; */

  }
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
