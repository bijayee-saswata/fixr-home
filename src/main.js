import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
require("./firebaseConfig");
require("./firebaseinit");

global.jQuery = require("jquery");
require("bootstrap3");
global.$ = require("jquery");
import "bootstrap3/dist/css/bootstrap.css";

const Services = () => import("./components/Services.vue");
const Home = () => import("./components/HomePage.vue");
const Contact = () => import("./components/Contact.vue");
const ServiceDescription = () => import("./components/ServiceDescription.vue");
const PageNotFound = () => import("./components/PageNotFound.vue");
const MyOrders = () => import("./components/MyOrders.vue");

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  {
    path: "/services/:refName",
    name: "services",
    component: Services,
    props: true,
  },
  { path: "/contact", component: Contact },
  {
    path: "/myOrders",
    name: "myOrders",
    component: MyOrders,
  },
  {
    path: "/service/:parent/:slug",
    name: "description",
    component: ServiceDescription,
    props: true,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
