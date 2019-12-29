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
            <!-- <img
              src="https://firebasestorage.googleapis.com/v0/b/fixr-3b596.appspot.com/o/fixr%20logo.png?alt=media&token=ff5a93a2-22bc-47cd-aa5f-e91a9d17d137"
              alt="logo"
            /> -->
            Fixr
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
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>

</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>

nav {
  position: fixed;
  top: 0;
  background:var(--main-bg-color);
  width: 100%;
  z-index: 20;
  margin: 0;
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
   padding: 15px;
   font-family: garamond;
   margin: 0;
   font-size: 1.8em;
  font-weight: 800;
}

.navbar-header a::first-letter{
  color: aqua;
}

.navbar-default{
  border-color: transparent;
}
.navbar-brand img{
  width: 90px;
  height: 60px;
}

nav a{
  font-size: 1em;
  font-weight: 600;
  color:#fff !important;
}
nav a:hover {
  color: #000;

} 
@media (max-width:760px) {
  #navbar-collapse{
    height:auto;
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
