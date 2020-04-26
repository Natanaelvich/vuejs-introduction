import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueToastify from "vue-toastify";
import "./styles/global.css";

Vue.config.productionTip = false;
Vue.use(VueToastify, {
  successDuration: 2000,
  errorDuration: 3000,
});

new Vue({
  router,
  render: (h) => h(App, <ToastContainer autoClose={3000} />),
}).$mount("#app");
