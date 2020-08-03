<template>
  <section>
    <div class="layout">
      <!-- Wrapper for slides -->
      <div class="inner">
        <img src="../assets/home.png" class="img-responsive" alt="Banner" />
        <div class="text">
          <div class="search">
            <span class="location">
              <i class="fa fa-map-marker"></i>Bhubaneswar
            </span>
            <input
              type="text"
              class="searchBox"
              v-model="query"
              placeholder=" Search..."
              style="font-family: FontAwesome, Arial; font-style: normal"
            />
            <div class="option">
              <ul>
                <li v-for="(match,index) in matches" :key="index" @click="selected(match.parent)">
                  <i class="fa fa-search"></i>
                  {{match.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ServiceComponent />

      <AppComponent />
    </div>
  </section>
</template>

<script>
import ServiceComponent from "./serviceComponent.vue";
import AppComponent from "./AppComponent";
import lists from "../assets/lists";

export default {
  name: "Home",
  data() {
    return {
      lists: [],
      query: ""
    };
  },
  components: {
    ServiceComponent,
    AppComponent
  },

  methods: {
    selected(index) {
      this.$router.push({ name: "services", params: { refName: index } });
    }
  },
  computed: {
    matches() {
      if (this.query == "") return [];

      return this.lists.filter(list => {
        list.name.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },
  created() {
    this.lists = lists;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner {
  width: 100%;
  position: relative;
}

.inner img {
  width: 100vw;
  object-fit: contain;
  /* max-height: 100%; */
}

.inner .text .search {
  position: absolute;
  top: 85%;
  right: 7%;
  width: 65%;
  display: grid;
  grid-template-columns: repeat(1fr, 8);
}
.location {
  grid-column: 1/4;
  padding: 10px;
  background: #fff;
  border-radius: 40px;
  width: 100%;
}
.inner .text .search .fa {
  padding-right: 5px;
}
.searchBox {
  grid-column: 4/9;
  padding: 8.5px;
  border-radius: 40px;
  width: 100%;
}
input[type="text"]::placeholder {
  /* Firefox, Chrome, Opera */
  text-align: center;
}
.option {
  position: relative;
  grid-column: 4/9;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;
}
.option::-webkit-scrollbar {
  width: 5px;
}
.option ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
  margin: 0;
}
.option ul li {
  cursor: pointer;
  padding: 10px;
  background: #f1f1f1;
  font-size: 1em;
}
.option ul li i {
  padding: 1%;
}
.option ul li:hover {
  color: #000;
  font-weight: 800;
}
@media (max-width: 768px) {
  .inner img {
    width: 100vw;
  }
  .location {
    background: #fff;
    border-radius: 40px;
    font-size: 0.8em;
    width: 100%;
  }

  .searchBox {
    padding: 0.5em 0 0.5em 0;
    width: 100%;
  }
  .appBannerImage img {
    max-width: 20em;
    max-height: 50vh;
  }
  .search {
    position: relative !important;
    left: 0;
    width: 100% !important;
    margin: 0;
    text-align: center;
    padding: 2%;
  }
  .option {
    grid-column: 1/9;
  }
}
</style>
